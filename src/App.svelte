<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import UserForm from './components/UserForm.svelte';
  import LocationDetails from './components/LocationDetails.svelte';

  // Tabs
  let items = ["Price Location Details", "Add New Price Location"];
  let activeItem = "Price Location Details";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };
</script>

<Header />

<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Price Location Details"}
    <LocationDetails />
  {:else if activeItem === "Add New Price Location"}
    <UserForm on:add={handleAdd} />
  {/if}
</main>

<Footer />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
