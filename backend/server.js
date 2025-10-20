require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Environment variables for MongoDB connection
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || 'lolidog1' // fallback for local development
const PORT = process.env.PORT || 3000

// MongoDB URI using environment variable
const uri = `mongodb+srv://kobycut:${encodeURIComponent(MONGODB_PASSWORD)}@pollparty.wen4tqr.mongodb.net/?retryWrites=true&w=majority&appName=pollParty`
console.log('🔄 Connecting to MongoDB...')

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err))

// Simple route

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

const Poll = require('./Poll')

app.post('/polls', async (req, res) => {
  try {
    const { pollTitle, options } = req.body

    const poll = new Poll({
      pollTitle,
      options: options.map((text) => ({ text })),
    })

    const savedPoll = await poll.save()
    res.status(201).json(savedPoll)
  } catch (err) {
    res.status(500).json({ message: 'Error creating poll', error: err })
  }
})

app.get('/polls', async (req, res) => {
  try {
    const polls = await Poll.find().sort({ datePosted: -1 })
    console.log('POLLS: ', polls)
    console.log('POLLY: ', polls[1].options)
    res.status(200).json(polls)
  } catch (err) {
    res.status(500).json({ message: 'Error fetching polls', error: err })
  }
})

app.put('/polls/:pollId/vote', async (req, res) => {
  try {
    const datePosted = new Date(req.body.datePosted)
    const poll = await Poll.findOne({ datePosted })
    const selectedOption = req.body.selectedOption

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' })
    }
    const option = poll.options.find((option) => option.text === selectedOption.text)
    if (!option) {
      return res.status(404).json({ message: 'Option not found' })
    }
    option.votes++
    console.log(option)
    console.log(option.votes)
    await option.save()
    await poll.save()

    res.json({
      message: 'Poll successfully updated',
      poll: poll,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error updating poll', error: err.message })
  }
})
