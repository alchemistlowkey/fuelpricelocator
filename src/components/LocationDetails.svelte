<script>
  import Button from "../shared/Button.svelte";
  export let user;
  export let onUpdate;

  const handleDelete = () => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    }).then(() => {
      if (onUpdate) {
        onUpdate();
      }
    });
  };
</script>

<tr>
  <td>
    {user.name}
  </td>
  <td>
    {user.location}
  </td>
  <td class="price">
    ₦{parseFloat(user.price).toFixed(2)}
  </td>
  <td>
    {user.product}
  </td>
  <td>
    {user.stationName}
  </td>
  <td>
    <Button on:click={handleDelete}>Delete</Button>
  </td>
</tr>

<style>
  tr,
  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    border-radius: 6px;
  }
  tr {
    background: #f2f2f2;
  }
  .price {
    text-align: right;
  }
  @media (max-width: 400px) {
    tr,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      padding: 5px;
    }
    .price {
      text-align: left;
    }
  }
</style>
