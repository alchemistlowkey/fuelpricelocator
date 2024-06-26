<script>
  // Import necessary functions and components
  import { onMount } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import LocationDetails from "./LocationDetails.svelte"; // Import LocationDetails component
  import SearchForm from "./SearchForm.svelte"; // Import SearchForm component

  // Declare reactive variables
  let users = []; // Holds the list of users
  let searchParams = {}; // Holds the search parameters

  // Function to fetch users from the server
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    users = await response.json();
  };

  // Function to handle update user event
  const handleUpdateUser = () => {
    fetchUsers(); // Fetch updated user data
  };

  // Perform initial fetch of users when component mounts
  onMount(async () => {
    await fetchUsers();
  });

  // Function to handle search event
  const handleSearch = async (e) => {
    searchParams = e.detail; // Update search parameters

    // Fetch users based on search parameters
    const response = await fetch(
      `http://localhost:5000/search?query=${searchParams.query}`
    );
    users = await response.json();
  };
</script>

<!-- SearchForm component to search for users -->
<SearchForm on:search={handleSearch} />

<!-- Display users in a table if users exist -->
{#if users.length > 0}
  <table>
    <thead>
      <!-- Table header -->
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Price</th>
        <th>Product</th>
        <th>Name Of Fuel Station</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody in:slide out:fade>
      <!-- Iterate over users and display LocationDetails component for each user -->
      {#each users as user (user._id)}
        <LocationDetails {user} onUpdate={handleUpdateUser} />
      {/each}
    </tbody>
  </table>
{:else}
  <!-- Display message if no users are found -->
  <p>No Details found.</p>
{/if}

<!-- Styling for the table -->
<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  tr {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  /* Media query for smaller screens */
  @media (max-width: 400px) {
    table,
    th,
    tr {
      font-size: 12px;
      padding: 5px;
      margin-left: 0;
    }

    th,
    tr {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    tr {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    th {
      background-color: transparent;
    }
  }
</style>
