<template>
  <div class="category-list">
    <div class="category-list__box"><h4 @click="filterA('fetured')">FETURED</h4></div>
    <div class="category-list__box"><h4 @click="filterA('men')">MEN</h4></div>
    <div class="category-list__box"><h4 @click="filterA('women')">WOMEN</h4></div>
    <div class="category-list__box"><h4 @click="filterA('kids')">KIDS</h4></div>
    <div class="category-list__box">
      <h4 @click="filterA('accesories')">ACCESORIES</h4>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "categoryList",
  methods: {
    ...mapActions(["filterA"]),
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
