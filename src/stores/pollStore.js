import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or JavaScript?",
    answers: [
      { title: "Python", votes: 6 },
      { title: "JavaScript", votes: 30 },
    ],
  },
]);

export default PollStore;
