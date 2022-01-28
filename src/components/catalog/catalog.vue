<template>
  <div class="wrapper-main">
    <div class="container">
      <div class="category">
        <h2>CATERGORY</h2>
        <categoryList/>
        <div class="catalog">
          <good :items="browseMore" :text="'add in cart'" />
        </div>
        <buttons :text="'Browse more'" @click="counterActions" />
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import categoryList from "./category-list";
import good from "../elements/good";
import buttons from "../elements/buttons";
import { mapActions, mapState } from 'vuex'

export default {
  name: "category",
  components: { categoryList, good, buttons },
  methods: {
    ...mapActions(['counter']),
    counterActions(){
      this.counter()
    },
  },
  computed: {
    ...mapState({
      filterGoods: state=> state.goodsModule.filterGoods,
      count: state=> state.goodsModule.count
    }),
    browseMore() {
      return this.filterGoods.slice(0, this.count);
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
