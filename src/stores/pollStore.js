import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or JavaScript?",
    answers: [
      { value: "Python", votes: 6 },
      { value: "JavaScript", votes: 30 },
    ],
  },
]);

export default PollStore;
