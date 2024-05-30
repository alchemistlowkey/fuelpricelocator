<script>
  // Import createEventDispatcher to create a custom event
  import { createEventDispatcher } from "svelte";
  // Import Button component for the form submission button
  import Button from "../shared/Button.svelte";

  // Define a variable to hold the search query input
  let query = "";

  // Create an event dispatcher instance
  const dispatch = createEventDispatcher();

  // Function to handle the search action
  const handleSearch = () => {
    // Dispatch a custom "search" event with the query as the event detail
    dispatch("search", { query });
  };
</script>

<!-- Form to handle search input -->
<!-- Prevent default form submission and call handleSearch on submit -->
<form on:submit|preventDefault={handleSearch}>
  <div class="form-field">
    <!-- Label for the search input -->
    <label for="query">Search:</label>
    <!-- Input field bound to the query variable -->
    <input
      id="query"
      type="text"
      bind:value={query}
      placeholder="Search by location, product, or station name"
    />
  </div>

  <!-- Button component for submitting the form -->
  <Button type="submit tertiary">Search</Button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }
  .form-field {
    width: 100%;
    margin: 10px 0;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 6px;
  }

  @media (max-width: 600px) {
    form {
      padding: 10px;
    }
    .form-field {
      width: 100%;
    }
    input {
      width: 100%;
      padding: 6px;
    }
  }
</style>
