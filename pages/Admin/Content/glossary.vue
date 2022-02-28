<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-glossary"><FormulateInput type="button">Add New Glossary Term</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>Glossary ID</th>
            <th>Glossary Image</th>
            <th>Glossary Name</th>
            <th>Glossary Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="glossaries in glossary" :key="glossaries.id">
          <tr>
            <td>{{ glossaries.id }}</td>
            <td>{{ glossaries.image }}</td>
            <td>{{ glossaries.name }}</td>
            <td>{{ glossaries.content }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import glossary from '~/apollo/queries/content/glossaries.gql'

export default {
  data() {
    return {
      glossary: [],
    }
  },
  apollo: {
    glossary: {
      prefetch: true,
      query: glossary
    }
  },
    head: {
      title: 'Glossary'
    }
  }

</script>
