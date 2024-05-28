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

  <Button type="submit">Search</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
    text-align: left;
  }
  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
  }
  label {
    display: block;
    margin-bottom: 6px;
  }
</style>
