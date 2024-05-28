<script>
  import { onMount } from "svelte";
  import LocationDetails from "./LocationDetails.svelte";
  import SearchForm from "./SearchForm.svelte";

  let users = [];
  let searchParams = {};

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    users = await response.json();
  };

  const handleUpdateUser = () => {
    fetchUsers();
  };

  onMount(async () => {
    await fetchUsers();
  });

  const handleSearch = async (event) => {
    searchParams = event.detail;

    // Fetch users based on search parameters
    const response = await fetch(`http://localhost:5000/search?location=${searchParams.location}&fuelType=${searchParams.fuelType}&stationName=${searchParams.stationName}&sortBy=${searchParams.sortBy}`);
    users = await response.json();
  };
</script>

<SearchForm on:search={handleSearch} />

{#if users.length > 0}
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Price</th>
        <th>Product</th>
        <th>Name Of Fuel Station</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user (user._id)}
        <LocationDetails {user} onUpdate={handleUpdateUser} />
      {/each}
    </tbody>
  </table>
{:else}
  <p>No Details found.</p>
{/if}

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
</style>
