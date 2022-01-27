<template>
  <div class="category-list">
    <div class="category-list__box"><h4 @click="filtered('fetured')">FETURED</h4></div>
    <div class="category-list__box"><h4 @click="filtered('men')">MEN</h4></div>
    <div class="category-list__box"><h4 @click="filtered('women')">WOMEN</h4></div>
    <div class="category-list__box"><h4 @click="filtered('kids')">KIDS</h4></div>
    <div class="category-list__box">
      <h4 @click="filtered('accesories')">ACCESORIES</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "categoryList",
  methods: {
    filtered(category) {
      this.$emit("filtered", category);
    },
  },
};
</script>
<style lang="sass" scoped>
.category-list
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.category-list h4:hover
  border-bottom: 1px solid $dark
@include tablet
  .category-list
    flex-direction: row
    &__box
      display: flex
    &__box:after
      content: '/'
      display: inline-block
      margin-right: 10px
      margin-left: 10px
</style>
