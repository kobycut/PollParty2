<script setup>
import { ref } from 'vue'
import { Poll } from '../../Poll'
import { useRouter } from 'vue-router'
import { usePolls } from '../scripts/usePolls'

const { createPoll } = usePolls()
const pollTitle = ref('')
const options = ref([''])
const addOption = () => {
  options.value.push('')
}
const router = useRouter()
const handleSubmit = async () => {
  const poll = new Poll(pollTitle.value, 0, options.value.map((text) => ({ text, votes: 0 })))
  createPoll(poll)

  router.push('/polls')
}
</script>

<template>
  <main>
    <div>
      <form class="createForm" @submit.prevent="handleSubmit">
        <label class="pollTitle" for="pollTitle">Poll Title:</label>
        <input
          class="inputBox"
          type="text"
          id="pollTitle"
          v-model="pollTitle"
          :placeholder="'Poll Title'"
        />

        <label>Options:</label>
        <div v-for="(option, index) in options" :key="index">
          <input
            class="inputBox"
            type="text"
            v-model="options[index]"
            :placeholder="`Option ${index + 1}`"
          />
        </div>

        <button class="addOption" type="button" @click="addOption">Add Option</button>
        <button class="submitButton" type="submit">Create Poll</button>
      </form>
    </div>
  </main>
</template>
