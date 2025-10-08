export class Poll {
  pollTitle = ''
  datePosted = 0
  options = []

  constructor(pollTitle, datePosted, options) {
    ;(this.pollTitle = pollTitle),
      (this.options = options.map((option) => ({
        text: option.text,
        votes: option.votes,
      })))
    this.datePosted = datePosted
  }

  vote(optionText) {
    const option = this.options.find((option) => option.text === optionText)
    option.votes++
  }
}
