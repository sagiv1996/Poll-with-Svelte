<script>
  import Tabs from './shared/Tabs.svelte';
  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';
  const tabChange = (e) => activeItem = e.detail;
</script>


<Tabs {activeItem} {items} on:tabChange={tabChange} />
