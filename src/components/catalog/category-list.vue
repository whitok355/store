<template>
  <div class="category-list">
    <div class="category-list__box"><h4 @click="filteredActions('fetured')">FETURED</h4></div>
    <div class="category-list__box"><h4 @click="filteredActions('men')">MEN</h4></div>
    <div class="category-list__box"><h4 @click="filteredActions('women')">WOMEN</h4></div>
    <div class="category-list__box"><h4 @click="filteredActions('kids')">KIDS</h4></div>
    <div class="category-list__box"><h4 @click="filteredActions('accesories')">ACCESORIES</h4></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: "categoryList",
  methods: {
    ...mapActions(['filtered']),
    filteredActions(category){
      this.filtered(category)
    }
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
