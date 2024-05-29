<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let query = "";
  let sortBy = "price"; // Default sorting option

  const dispatch = createEventDispatcher();

  const handleSearch = () => {
    dispatch("search", { query });
  };
</script>

<form on:submit|preventDefault={handleSearch}>
  <div class="form-field">
    <label for="query">Search:</label>
    <input id="query" type="text" bind:value={query} placeholder="Search by location, product, or station name" />
  </div>

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
  input{
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    form {
      padding: 10px;
    }
    .form-field {
      width: 100%;
    }
    input{
      width: 100%;
      padding: 6px;
    }
  }
</style>
