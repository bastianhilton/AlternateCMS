<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
          <div class="dropdown">
            <button id="dropdownMenuButton" class="btn btn-primary dropdown-toggle" type="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              Rules
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Catalog Price Rule</a></li>
              <li><a class="dropdown-item" href="#">Related Products Rules</a></li>
              <li><a class="dropdown-item" href="#">Cart Price Rules</a></li>
              <li><a class="dropdown-item" href="#">Gift Card Accounts</a></li>
            </ul>
          </div>
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
            <th scope="col">ID</th>
            <th scope="col">Group</th>
            <th scope="col">Tax Class</th>
            <th scope="col">Actions</th>
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
            <td><a href="/">Edit</a></td>
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
            <td><a href="/">Edit</a></td>
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
            <td><a href="/">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {

    head: {
      title: 'Promotions'
    }
  }

</script>
