import { ref } from 'vue'
import { Poll } from '../../Poll'
const polls = ref([])

// API base URL - defaults to localhost for development
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'
console.log('🔗 API Base URL:', API_BASE)

async function fetchPolls() {
  try {
    const response = await fetch(`${API_BASE}/polls`)
    const data = await response.json()
    polls.value = data.map((p) => new Poll(p.pollTitle, p.datePosted, p.options))
    polls.value = data.map((p) => ({
      ...p,
      options: p.options.map((o) => ({
        ...o,
        selected: false,
        color: getRandomColor(),
      })),
    }))
  } catch (error) {
    console.error('Error fetching polls:', error)
  }

  return polls
}
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360)
  const saturation = 60
  const lightness = Math.floor(Math.random() * 30) + 60

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

async function createPoll(poll) {
  await fetch(`${API_BASE}/polls`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({
      pollTitle: poll.pollTitle,
      options: poll.options.map((option) => option.text),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      polls.value.push(data)
    })
    .catch((error) => console.error('Error creating poll:', error))

  fetchPolls()
}

async function updatePoll(selectedOption, poll) {
  try {
    const response = await fetch(`${API_BASE}/polls/${poll.datePosted}/vote`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        datePosted: poll.datePosted,
        selectedOption: selectedOption,
      }),
    })

    console.log('Response status:', response.status) // Log status code
    console.log('Response OK:', response.ok)
    if (!response.ok) {
      throw new Error('Failed update poll')
    }
  } catch (error) {
    console.error('Error updating poll: ', error)
  }
}

export function usePolls() {
  return {
    polls,
    fetchPolls,
    createPoll,
    updatePoll,
  }
}
