/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-attribute"><FormulateInput type="button">Add New Attribute</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>Attribute Name</th>
            <th>Attribute Code</th>
            <th>Attribute Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="attributes in product_attribute" :key="attributes.id">
          <tr>
            <td>{{ attributes.default_label }}</td>
            <td>{{ attributes.attribute_code }}</td>
            <td>{{ attributes.default_value }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import product_attribute from '~/apollo/queries/shop/attributes.gql'

export default {
  data() {
    return {
      product_attribute: [],
    }
  },
  apollo: {
    product_attribute: {
      prefetch: true,
      query: product_attribute
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Attributes'
    }
  }

</script>
