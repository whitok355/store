<template>
  <div class="wrapper-main">
    <div class="container">
      <div class="category">
        <h2>CATERGORY</h2>
        <categoryList @filtered="filtered" />
        <div class="catalog">
          <good :items="browseMore" :text="'add in cart'" />
        </div>
        <buttons :text="'Browse more'" @click="this.$store.dispatch('counter')" />
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import categoryList from "./category-list";
import good from "../elements/good";
import buttons from "../elements/buttons";
export default {
  name: "category",
  components: { categoryList, good, buttons },
  methods: {
    filtered(category) {
      this.$store.dispatch("filtered", category);
    },
  },
  computed: {
    browseMore() {
      return this.$store.state.filterGoods.slice(0, this.$store.state.count);
    },
  },
};
</script>
<style lang="sass" scoped>
.category
  display: flex
  flex-direction: column
  align-items: center
.category h2
  color: $darkPink
  text-align: center
.category-list
  margin-top: 24px
.catalog
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  margin-top: 64px
  width: 100%
.button
  margin-top: 24px
</style>
