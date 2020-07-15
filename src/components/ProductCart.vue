<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img class="card-img-top" src="https://via.placeholder.com/150x100" alt />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{name:'ProductDetail',params:{id:23}}">Product Title</router-link>
        </h4>
        <strong>$23</strong>
        <p class="card-text">Lorem ipsum dolor sit amet</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-cart-component"
};
</script>

<style>
</style>