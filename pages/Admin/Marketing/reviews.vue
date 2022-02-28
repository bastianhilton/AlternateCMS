<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-review"><FormulateInput type="button">Create A Review</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>Customer Name</th>
            <th>Review</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="reviews in reviews" :key="reviews.id">
          <tr>
            <td>{{ reviews.first_name }} {{ reviews.last_name }}</td>
            <td>{{ reviews.content }}</td>
            <td>{{ reviews.created_at }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import reviews from '~/apollo/queries/marketing/reviews'

export default {
  data() {
    return {
      reviews: [],
    }
  },
  apollo: {
    reviews: {
      prefetch: true,
      query: reviews
    }
  }, 
    head: {
      title: 'Reviews'
    }
  }

</script>
