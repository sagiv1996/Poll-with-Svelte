<script>
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (/** @type {{ detail: string; }} */ e) =>
    (activeItem = e.detail);

  const handleAdd = () => {
    activeItem = "Current Polls";
  };
</script>

<Tabs {activeItem} {items} on:tabChange={tabChange} />
{#if activeItem === "Current Polls"}
  <PollList />
{:else if activeItem === "Add New Poll"}
  <CreatePollForm on:add={handleAdd} />
{/if}
<Footer />
