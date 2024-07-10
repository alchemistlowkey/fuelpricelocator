<script>
  // Import the createEventDispatcher function from Svelte
  import { createEventDispatcher } from "svelte";
  // Import Button component for form submission button
  import Button from "../shared/Button.svelte";

  // Initialize form field variables
  let name = "";
  let location = "";
  let price = "";
  let product = "";
  let stationName = "";
  let errorMessage = "";

  // Create an event dispatcher instance
  const dispatch = createEventDispatcher();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    try {
      // Send a POST request to the server to create a new user
      const response = await fetch("https://backend-gamma-ashen.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location, price, product, stationName }),
      });

      // Check if the response is not ok (status code outside 200-299 range)
      if (!response.ok) {
        throw new Error("Failed to add details");
      }

      // Parse the response as JSON to get the newly created user
      const newUser = await response.json();
      // Dispatch a custom event 'userAdded' with the new user as detail
      dispatch("userAdded", newUser);

      // Reset form fields
      name = "";
      location = "";
      price = "";
      product = "";
      stationName = "";
      errorMessage = "";
    } catch (error) {
      // Set error message if there's an error during the fetch operation
      errorMessage = error.message;
    }
  };
</script>

<div class="container-fluid">
  <!-- Form to add user details -->
  <form on:submit={handleSubmit} class="">
    <div class="mb-3">
      <!-- <label for="name" class="form-label">Name:</label> -->
      <input class="form-control"
        id="name"
        type="text"
        bind:value={name}
        placeholder="Enter your name"
        required
      />
    </div>

    <div class="mb-3">
      <!-- <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">Location</span> -->
      <!-- <label for="location" class="form-label">Location:</label> -->
      <input class="form-control"
        id="location"
        type="text"
        bind:value={location}
        placeholder="Enter address of the fuel station and the state"
        required
      />
      <!-- </div> -->
    </div>

    <div class="mb-3">
      <!-- <label for="price" class="form-label">Price:</label> -->
      <input class="form-control"
        id="price"
        type="number"
        bind:value={price}
        placeholder="Enter price in per L or per Kg"
        required
      />
    </div>

    <div class="mb-3">
      <!-- <label for="product" class="form-label">Product:</label> -->
      <select id="product" class="form-select" bind:value={product} required>
        <option value="" disabled selected>Select a product</option>
        <option value="PMS">PMS</option>
        <option value="AGO">AGO</option>
        <option value="LPG">LPG</option>
      </select>
    </div>

    <div class="mb-3">
      <!-- <label for="stationName" class="form-label">Name Of Fuel Station:</label> -->
      <input class="form-control"
        id="stationName"
        type="text"
        bind:value={stationName}
        placeholder="Enter Fuel station name"
        required
      />
    </div>

    <!-- Display error message if any -->
    {#if errorMessage}
      <p class="invalid-feedback">{errorMessage}</p>
    {/if}

    <div>
      <!-- Submit button to add details -->
      <button type="submit" class="btn btn-success mb-2" flat={true}>Add Details</button>
    </div>
  </form>
</div>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  /* input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
    background: #f7f7f7;
  } */
  /* label {
    display: block;
    margin-bottom: 6px;
  } */

  /* .error-message {
    color: red;
    margin-top: 0.5em;
    text-align: center;
  } */
</style>
