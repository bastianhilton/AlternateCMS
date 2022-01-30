/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-product"><button type="button" class="btn btn-primary">Add New Product</button></a>
        <form class="d-flex input-group w-auto">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search By Keyword"
            aria-describedby="search-addon" />
          <span id="search-addon" class="input-group-text border-0">
            <i class="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
    <br>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h6 class="navTotal">3 items found</h6>
        <ul class="nav navbar-nav ms-auto">
          <form action="/" class="filterPage">
            <select id="filterPagination" name="filterPagination">
              <option value="twenty"> 20 </option>
              <option value="thirty"> 30 </option>
              <option value="fifty"> 50 </option>
              <option value="onehundred"> 100 </option>
              <option value="twohundred"> 200 </option>
            </select>
            <label for="cars">per page </label>
          </form>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </ul>
      </div>
    </nav>
    <br>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">
              <div class="form-check">
                <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">
              <div class="form-check">
                <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <td>Sit</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.shortDescription }}</td>
            <td>{{ product.type }}</td>
            <td><a href="/">View</a></td>
          </tr>
          <h1 v-if="loaded && !products.length" class="text-2xl">No products...</h1>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import products from '~/apollo/queries/shop/products'

export default {
 /* data() {
    return {
      products: [],
    }
  },
  apollo: {
    products: {
      prefetch: true,
      query: products
    }
  }, */
    head: {
      title: 'Products'
    }
  }

</script>
