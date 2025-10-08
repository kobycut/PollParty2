<script setup></script>

<template>
  <main>
    <div class="welcome-container">
      <p class="welcome-message">Welcome to <span class="blue-text">Poll Party</span></p>
      <!-- <div class="splash" v-if="showSplash">💦</div> -->
      <button @click="navigateToPolls" class="begin-button">Begin Polling</button>
    </div>
    <h1 class="purpose-message">&#9432; Purpose of Poll Party</h1>
    <div class="purpose-container">
      <div class="purpose-item">
        <h2>&#9432; Vote anonymously on a group decision</h2>
        <p>
          Ever been in an indecisive group that isn't sure where to eat, what to do, or when to do
          something? Vote unanimously using group polls to find out the best option for the group.
        </p>
      </div>
      <div class="purpose-item">
        <h2>&#9432; Respond to Polls</h2>
        <p>
          See an interesting question someone has or decision someone wants to make? Contribute to
          this question or final decision through voting on their poll.
        </p>
      </div>
      <div class="purpose-item">
        <h2>&#9432; Create Polls</h2>
        <p>Create any poll you want that others can respond to through there voting.</p>
      </div>
      <div class="purpose-item">
        <h2>&#9432; Discover Public Feelings On a Topic</h2>
        <p>
          Using an extensive database, search multiple topics and the feelings people have of those
          topics.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

<script>
export default {
  methods: {
    navigateToPolls() {
      this.$router.push('/polls')
    },
  },
}
</script>
