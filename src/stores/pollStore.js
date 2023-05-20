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
  {
    id: 2,
    question: "Which is your favorite programming language?",
    answers: [
      { title: "Java", votes: 10 },
      { title: "C++", votes: 15 },
      { title: "Python", votes: 20 },
      { title: "JavaScript", votes: 12 },
    ],
  },
  {
    id: 3,
    question: "What is your preferred mobile operating system?",
    answers: [
      { title: "Android", votes: 25 },
      { title: "iOS", votes: 18 },
      { title: "Windows Phone", votes: 3 },
    ],
  },
  {
    id: 4,
    question: "Which social media platform do you use the most?",
    answers: [
      { title: "Facebook", votes: 22 },
      { title: "Twitter", votes: 15 },
      { title: "Instagram", votes: 28 },
      { title: "LinkedIn", votes: 8 },
    ],
  },
  {
    id: 5,
    question: "What is your preferred web browser?",
    answers: [
      { title: "Google Chrome", votes: 40 },
      { title: "Mozilla Firefox", votes: 15 },
      { title: "Safari", votes: 10 },
      { title: "Microsoft Edge", votes: 12 },
      { title: "Opera", votes: 5 },
    ],
  },
  {
    id: 6,
    question: "Which is your favorite movie genre?",
    answers: [
      { title: "Action", votes: 25 },
      { title: "Comedy", votes: 18 },
      { title: "Drama", votes: 12 },
      { title: "Science Fiction", votes: 20 },
    ],
  },
]);

export default PollStore;
