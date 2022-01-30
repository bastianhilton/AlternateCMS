<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <!-- Dropdown -->
          <form action="/" class="filterAction">
            <label for="actions">Actions: </label>
            <select id="actions" name="actions">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
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
            <th scope="col">Lorem</th>
            <th scope="col">Ipsum</th>
            <th scope="col">Dolor</th>
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
            <td><a href="/">View</a></td>
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
            <td><a href="/">View</a></td>
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
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {

    head: {
      title: 'Credit Memos'
    }
  }

</script>
