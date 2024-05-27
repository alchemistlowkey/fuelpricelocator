<script>
  import { onMount } from "svelte";
  import LocationDetails from "./LocationDetails.svelte";

  let users = [];

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
</script>

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
