<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-shop"><input type="submit" class="btn btn-warning" value="Add A New Shop"></a>
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Shop Name</th>
            <th>Website</th>
            <th>Store Type</th>
            <th>Tags</th>
            <th>Shop Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="shop in shops" :key="shop">
            <td>{{ shop.name }}</td>
            <td>{{ shop.website }}</td>
            <td>{{ shop.type }}</td>
            <td>{{ shop.tags }}</td>
            <td>{{ shop.country }}</td>
            <td><a :href="`/admin/edit/shops/${shop.id}`">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  shops from '~/graphql/queries/shop/products'

export default {
  data() {
    return {
      shops: [],
    }
  },
  apollo: {
    shops: {
      prefetch: true,
      query: shops
    }
  }, 
    head: {
      title: 'Shops'
    }
  }

</script>
