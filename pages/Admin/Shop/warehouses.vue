<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-warehouse"><FormulateInput type="button">Create Warehouse</FormulateInput></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Shipping Zones</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="fullfillment in fullfillment" :key="fullfillment.id">
          <tr>
            <td>{{ fullfillment.name }}</td>
            <td>{{ fullfillment.shipping_zones }}</td>
            <td><a :href="`/admin/edit/fullfillment/${fullfillment.id}`">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import fullfillment from '~/apollo/queries/shop/fullfillment.gql'

export default {
  data() {
    return {
      fullfillment: [],
    }
  },
  apollo: {
    fullfillment: {
      prefetch: true,
      query: fullfillment
    }
  }, 
    head: {
      title: 'Warehouses'
    }
  }

</script>
