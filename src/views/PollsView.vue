<script setup>
import { onMounted, ref } from 'vue'
import { usePolls } from '../scripts/usePolls'

const { polls, fetchPolls, updatePoll } = usePolls()

onMounted(() => {
  fetchPolls()

})

async function selectOption(selectedOption, poll) {
  if (poll.voted) {
    alert('You can only vote once per poll!')
    return
  }
  poll.options.forEach((option) => {
    option.selected = false
  })

  selectedOption.selected = true
  selectedOption.votes++
  poll.voted = true
  await updatePoll(selectedOption, poll)
}

function getWidth(votes, poll) {
  const maxVotes = Math.max(...poll.options.map((opt) => opt.votes))
  if (maxVotes === 0) return '20%'
  const percent = (votes / maxVotes) * 80
  if (votes < 1) {
    return '20%'
  }
  if (percent < 10) {
    return '22%'
  }
  if (percent < 20) {
    return '25%'
  }
  return `${percent}%`
}
</script>

<template>
  <main>
    <div class="create-poll-container">
      <button @click="navigateToCreatePoll()" class="create-poll">Create Poll</button>
    </div>
    <div class="polls-container">
      <div v-for="poll in polls" class="poll-card">
        <h2>{{ poll.pollTitle }}</h2>
        <p>Posted: {{ new Date(poll.datePosted).toLocaleDateString() }}</p>
        <div
          v-for="option in poll.options"
          class="option-card"
          :style="{ backgroundColor: option.color, width: getWidth(option.votes, poll) }"
          :class="{ selected: option.selected }"
          @click="selectOption(option, poll)"
        >
          <p>{{ option.text }}</p>
          <p class="votes">votes: {{ option.votes }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    navigateToCreatePoll() {
      this.$router.push('/create')
    },
  },
}
</script>
