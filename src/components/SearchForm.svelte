<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let location = "";
  let fuelType = "";
  let stationName = "";
  let sortBy = "price"; // Default sorting option

  const dispatch = createEventDispatcher();

  const handleSearch = () => {
    dispatch("search", { location, fuelType, stationName, sortBy });
  };
</script>

<form on:submit|preventDefault={handleSearch}>
  <div class="form-field">
    <label for="location">Location:</label>
    <input id="location" type="text" bind:value={location} />
  </div>

  <div class="form-field">
    <label for="fuelType">Product Type:</label>
    <select id="fuelType" bind:value={fuelType}>
      <option value="" disabled selected>Select a fuel type</option>
      <option value="PMS">PMS</option>
      <option value="AGO">AGO</option>
      <option value="LPG">LPG</option>
    </select>
  </div>

  <div class="form-field">
    <label for="stationName">Fuel Station Name:</label>
    <input id="stationName" type="text" bind:value={stationName} />
  </div>

  <div class="form-field">
    <label for="sortBy">Sort By:</label>
    <select id="sortBy" bind:value={sortBy}>
      <option value="price">Price</option>
    </select>
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
  input,
  select {
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
    input,
    select {
      width: 100%;
      padding: 6px;
    }
  }
</style>
