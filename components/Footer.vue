<template>
  <div>
    <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © <div id="currentYear" style="display:inline-block;"></div> Copyright:
        <a class="text-dark" href="https://www.alternatecms.com/">Alternate CMS</a>
      </div>
    </footer>
    <button id="btn-back-to-top" type="button" class="btn btn-danger btn-floating btn-lg">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
</style>
