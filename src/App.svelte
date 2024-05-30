<script>
  // Importing necessary transitions and animations from Svelte
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  // Importing components used in this Svelte file
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import UserForm from "./components/UserForm.svelte";
  import LocationList from "./components/LocationList.svelte";

  // Initializing tabs with items and setting the default active tab
  let items = ["Price Location Details", "Add New Price Location"];
  let activeItem = "Price Location Details";

  // Function to handle tab change events
  const tabChange = (e) => {
    activeItem = e.detail; // Update the active tab based on the event detail
  };

  // Function to handle the addition of a new price location
  const handleAdd = (e) => {
    activeItem = "Price Location Details"; // Switch to the details tab after adding a new location
  };
</script>

<!-- Header component -->
<Header />

<main>
  <!-- Tabs component with active tab and items passed as props -->
  <!-- Handle tabChange events by calling the tabChange function -->
  <Tabs {activeItem} {items} on:tabChange={tabChange} />

  <!-- Conditionally rendering content based on the active tab -->
  {#if activeItem === "Price Location Details"}
    <!-- Show LocationList component if the active tab is "Price Location Details" -->
    <LocationList />
  {:else if activeItem === "Add New Price Location"}
    <!-- Show UserForm component with slide-in and fade-out transitions if the active tab is "Add New Price Location" -->
    <div in:slide out:fade>
      <!-- Handle add events by calling the handleAdd function -->
      <UserForm on:add={handleAdd} />
    </div>
  {/if}
</main>

<!-- Footer component -->
<Footer />

<style>
  /* Styling for the main content */
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  /* Media query for larger screens */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
