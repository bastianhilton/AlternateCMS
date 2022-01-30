<template>
  <div>
    <form action="" method="get">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><button type="button" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand"><button type="button" class="btn btn-success">Save and Continue Edit</button></a>
          <a class="navbar-brand"><button type="button" class="btn btn-primary">Save Customer</button></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Account Information</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab content -->
          <div id="v-tabs-tabContent" class="tab-content">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Enable Customer</td>
                      <td>
                        <div class="form-check form-switch">
                          <input id="flexSwitchCheckDefault" class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Associate to Website</td>
                      <td><select id="country" name="country">
                          <option value="country">Main Website</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Group</td>
                      <td><select id="country" name="country">
                          <option value="country">General</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name Prefix</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Middle Name/Initial</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name Suffix</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date of Birth</td>
                      <td><input type="date"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax/VAT Number</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gender</td>
                      <td><select id="dhcp" name="dhcp">
                          <option value="fc-dhcp">Female</option>
                          <option value="fc-dhcp">Male</option>
                          <option value="fc-dhcp">Not Specified</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Send Welcome Email From</td>
                      <td><select id="categories" name="Select">
                          <option value="fc-dhcp">Default Store View</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Customer Code</td>
                      <td><input type="text"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {

    head: {
      title: 'New Customer'
    }
  }

</script>

<style>

</style>
