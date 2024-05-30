<script>
  // Import Button component for delete action
  import Button from "../shared/Button.svelte";

  // Export props for the component
  export let user; // User object to display
  export let onUpdate; // Callback function to trigger on update

  // Function to handle the delete action
  const handleDelete = () => {
    // Send a DELETE request to the server to delete the user by ID
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    }).then(() => {
      // If onUpdate callback is provided, call it after deletion
      if (onUpdate) {
        onUpdate();
      }
    });
  };
</script>

<!-- Table row to display user information -->
<tr>
  <td>
    {user.name}
    <!-- Display user's name -->
  </td>
  <td>
    {user.location}
    <!-- Display user's location -->
  </td>
  <td class="price">
    ₦{parseFloat(user.price).toFixed(2)}
    <!-- Display user's price, formatted to 2 decimal places -->
  </td>
  <td>
    {user.product}
    <!-- Display user's product -->
  </td>
  <td>
    {user.stationName}
    <!-- Display fuel station name -->
  </td>
  <td>
    <!-- Button to delete the user -->
    <Button on:click={handleDelete}>Delete</Button>
  </td>
</tr>

<style>
  /* Styles for table row and table data */
  tr,
  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    border-radius: 6px;
  }

  /* Background color for table row */
  tr {
    background: #f2f2f2;
  }

  /* Right-align text in price column */
  .price {
    text-align: right;
  }

  /* Responsive styles for small screens */
  @media (max-width: 400px) {
    tr,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      padding: 5px;
    }

    /* Left-align text in price column for small screens */
    .price {
      text-align: left;
    }
  }
</style>
