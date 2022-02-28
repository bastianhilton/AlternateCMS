<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">
          <FormulateInput type="button">Import Data</FormulateInput>
        </a>
        <a class="navbar-brand">
          <FormulateInput type="button" style="float:right; right: 15px; position: absolute;">Export Data
          </FormulateInput>
        </a>
      </div>
    </nav>
    <br>

    <div class="row">
      <div class="col-3">
        <!-- Tab navs -->
        <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
          <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
            aria-controls="v-tabs-home" aria-selected="true">General</a>
          <a id="v-tabs-catalog-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-catalog" role="tab"
            aria-controls="v-tabs-catalog" aria-selected="false">Catalog</a>
          <a id="v-tabs-security-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-security" role="tab"
            aria-controls="v-tabs-security" aria-selected="false">Security</a>
            <a id="v-tabs-customers-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-customers" role="tab"
            aria-controls="v-tabs-customers" aria-selected="false">Customers</a>
            <a id="v-tabs-sales-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-sales" role="tab"
            aria-controls="v-tabs-sales" aria-selected="false">Sales</a>
            <a id="v-tabs-payments-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-payments" role="tab"
            aria-controls="v-tabs-payments" aria-selected="false">Payments</a>
            <a id="v-tabs-other-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-other" role="tab"
            aria-controls="v-tabs-other" aria-selected="false">Other Settings</a>
        </div>
      </div>

      <div class="col-9">
        <!-- Tab content -->
        <div id="v-tabs-tabContent" class="tab-content">
          <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
            Home content
          </div>
          <div id="v-tabs-catalog" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-catalog-tab">
            Catalog content
          </div>
          <div id="v-tabs-security" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-security-tab">
            Security content
          </div>
          <div id="v-tabs-customers" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-customers-tab">
            Customers content
          </div>
          <div id="v-tabs-sales" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-sales-tab">
            Sales content
          </div>
          <div id="v-tabs-payments" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-payments-tab">
            Payments content
          </div>
          <div id="v-tabs-other" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-other-tab">
            Other content
          </div>
        </div>
        <!-- Tab content -->
      </div>
    </div>

  </div>
</template>

<script>
  export default {

    head: {
      title: 'General Settings'
    }
  }

</script>
