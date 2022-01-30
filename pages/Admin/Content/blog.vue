<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><button type="button" class="btn btn-primary">Add New Article</button></a>
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
        <ul class="navbar-nav">
          <!-- Dropdown -->
          <form action="/" class="filterAction">
            <label for="actions">Actions: </label>
            <select id="actions" name="actions">
              <option value="volvo">Delete</option>
              <option value="saab">Disable</option>
              <option value="opel">Enable</option>
              <option value="audi">Edit</option>
            </select>
          </form>
        </ul>
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
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">URL Key</th>
            <th scope="col">Layout</th>
            <th scope="col">Store View</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Modified</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div class="form-check">
                <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td><select id="pageSelect" name="pageSelect">
                <option value="pageSelect">Select</option>
                <option value="pageSelect">Edit</option>
                <option value="pageSelect">Delete</option>
                <option value="pageSelect">View</option>
                </select></td>
          </tr>
          <tr>
            <th scope="row">
              <div class="form-check">
                <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <td>Adipisicing</td>
            <td>Elit</td>
            <td>Sint</td>
            <td>Sint</td>
            <td>Sint</td>
            <td>Sint</td>
            <td>Sint</td>
            <td>Sint</td>
            <td><select id="pageSelect" name="pageSelect">
                <option value="pageSelect">Select</option>
                <option value="pageSelect">Edit</option>
                <option value="pageSelect">Delete</option>
                <option value="pageSelect">View</option>
                </select></td>
          </tr>
          <tr>
            <th scope="row">
              <div class="form-check">
                <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <td>Hic</td>
            <td>Fugiat</td>
            <td>Temporibus</td>
            <td>Temporibus</td>
            <td>Temporibus</td>
            <td>Temporibus</td>
            <td>Temporibus</td>
            <td>Temporibus</td>
            <td><select id="pageSelect" name="pageSelect">
                <option value="pageSelect">Select</option>
                <option value="pageSelect">Edit</option>
                <option value="pageSelect">Delete</option>
                <option value="pageSelect">View</option>
                </select></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {

    head: {
      title: 'Blog'
    }
  }

</script>
