/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-product"><FormulateInput type="button">Add New Product</FormulateInput></a>
      </div>
    </nav>
    <br>
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">SKU</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
          <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.sku }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.short_description }}</td>
            <td>{{ product.type }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
 import products from '~/apollo/queries/shop/products'

export default {
  data() {
    return {
      products: [],
    }
  },
  apollo: {
    products: {
      prefetch: true,
      query: products
    }
  }, 
    head: {
      title: 'Products'
    }
  }

</script>
