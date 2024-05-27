<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let name = "";
  let location = "";
  let price = "";
  let product = "";
  let stationName = "";
  let errorMessage = "";

  const dispatch = createEventDispatcher();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location, price, product, stationName }),
      });

      if (!response.ok) {
        throw new Error("Failed to add details");
      }

      const newUser = await response.json();
      dispatch("userAdded", newUser);

      // Reset form fields
      name = "";
      location = "";
      price = "";
      product = "";
      stationName = "";
      errorMessage = "";
    } catch (error) {
      errorMessage = error.message;
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="name">Name:</label>
    <input id="name" type="text" bind:value={name} required />
  </div>

  <div class="form-field">
    <label for="location">Location:</label>
    <input id="location" type="text" bind:value={location} required />
  </div>

  <div class="form-field">
    <label for="price">Price:</label>
    <input id="price" type="number" bind:value={price} required />
  </div>

  <div class="form-field">
    <label for="product">Product:</label>
    <select id="product" bind:value={product} required>
      <option value="" disabled selected>Select a product</option>
      <option value="PMS">PMS</option>
      <option value="AGO">AGO</option>
      <option value="LPG">LPG</option>
    </select>
  </div>

  <div class="form-field">
    <label for="stationName">Name Of Fuel Station:</label>
    <input id="stationName" type="text" bind:value={stationName} required />
  </div>

  {#if errorMessage}
    <p class="error-message">{errorMessage}</p>
  {/if}

  <div>
    <Button type="submit secondary" flat={true}>Add Details</Button>
  </div>
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

  .error-message {
    color: red;
    margin-top: 0.5em;
    text-align: center;
  }
</style>
