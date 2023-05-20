<script>
  import PollStore from "../stores/pollStore.js";
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    {JSON.stringify(poll)}
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
