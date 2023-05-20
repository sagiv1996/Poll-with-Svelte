<script>
  import Card from "../shared/Card.svelte";
  import { tweened } from "svelte/motion";
  import PollStore from "../stores/pollStore";
  import Button from "../shared/Button.svelte";

  export let poll;
  const tweenedA = tweened(0);
  $: totalVotes = poll.answers.reduce(
    (/** @type {number} */ sum, /** @type {{ votes: number; }} */ answer) =>
      sum + answer.votes,
    0
  );
  $: tweenedA.set(100);

  const calculatePercent = (/** @type {number} **/ votes) => {
    return Math.floor((100 / totalVotes) * votes) || 0;
  };

  const handleVote = (index, id) => {
    PollStore.update((currentPoll) => {
      let copiedPolls = [...currentPoll];
      let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
      upvotedPoll.answers[index].votes++;
      return copiedPolls;
    });
  };
  const handleDelete = (/** @type {number} **/ id) => {
    PollStore.update((polls) => {
      return polls.filter((poll) => poll.id != id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    {#each poll.answers as answer, index}
      <div class="answer" on:click={() => handleVote(index, poll.id)}>
        <div
          class="percent percent-a"
          style="width: {calculatePercent(answer.votes)}%"
        />
        <span>{answer.title} ({answer.votes} votes)</span>
      </div>
    {/each}
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
  }
</style>
