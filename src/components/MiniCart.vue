<template>
  <div>
    <div
      class="dropdown-menu"
      style="min-width:320px; right:0; left:auto"
      aria-labelledby="dropdownId"
    >
      <div>
        <div class="px-2 d-flex justify-content-between">
          <div>
            <img src="#" />
            <strong>Product title</strong>
            <br />1x$23
          </div>
          <div>
            <a class="badge badge-danger" href="#">Remove</a>
          </div>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <span>Total Price: $23</span>
          <a href="#">Clear Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "min-cart-component"
};
</script>

<style>
</style>