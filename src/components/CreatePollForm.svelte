<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  import PollStore from "../stores/pollStore";

  let dispatch = createEventDispatcher();
  let question = "";
  let errors = { question: "", answers: [""] };
  let answers = [""];
  let valid = false;

  const resetErrorsFrom = () => {
    errors = { question: "", answers: [] };
  };

  const submitHandler = () => {
    valid = true;
    resetErrorsFrom();
    if (question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 chars long";
    }

    answers.forEach((answer, index) => {
      errors.answers[index] =
        answer.trim().length < 3
          ? "Question must be at least 3 chars long"
          : "";
    });
    if (valid) {
      let poll = {
        question,
        id: Math.random(),
        answers: answers.map((answer) => ({ title: answer, votes: 0 })),
      };
      PollStore.update((currentPolls) => [poll, ...currentPolls]);

      dispatch("add");
    }
  };

  const addAnswerHandler = () => {
    answers = [...answers, ""];
    errors.answers = [...errors.answers, ""];
  };

  function handleDelete(/** @type {Number} **/ index) {
    if (answers.length <= 1) return;
    answers = answers.filter((answer, ind) => ind !== index);
    errors.answers = errors.answers.filter((answer, ind) => ind !== index);
  }
</script>

<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-*******************"
    crossorigin="anonymous"
  />
</head>
<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" class="question" id="question" bind:value={question} />
    <div class="error">{errors.question}</div>
  </div>
  {#each answers as answer, index}
    <div class="form-field">
      <label class="answer" for="answer-{index}"
        >Answer {index + 1} value:</label
      >

      {#if answers.length > 1}
        <button
          on:click={() => handleDelete(index)}
          type="button"
          class="delete-button"
        >
          <i class="fas fa-trash-alt" />
        </button>
      {/if}
      <input
        class="answer"
        type="text"
        id="answer-{index}"
        bind:value={answers[index]}
      />

      <div class="error">{errors.answers[index]}</div>
    </div>
  {/each}
  <Button type="button" on:click={addAnswerHandler}>Add answer</Button>
  <Button>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    border-radius: 6px;
  }
  input.question,
  label.answer {
    width: 100%;
  }

  input.answer {
    width: 50%;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
  .delete-button {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>
