<template>
  <div class="container">
    <div class="fetured">
      <h2>Fetured items</h2>
      <p>Shop for items based on what we featured in this week</p>
      <div class="fetured-list">
        <good :items="browseMore" :text="'add in cart'" />
      </div>
      <div class="fetured-btn">
        <buttons :text="'Browse more'" @click="this.$store.dispatch('counter')" />
      </div>
    </div>
  </div>
</template>
<script>
import good from "../elements/good";
import buttons from "../elements/buttons";
export default {
  name: "fetured",
  components: { good, buttons },
  computed: {
    browseMore() {
      return this.$store.state.goods.slice(0, this.$store.state.count);
    },
  },
};
</script>
<style lang="sass" scoped>
.fetured
  text-align: center
  margin-top: 64px
.fetured-list
  display: flex
  flex-direction: row
  flex-wrap: wrap
  align-items: center
  justify-content: center
  margin-top: 64px
  width: 100%
.fetured p
  color: $lightGrey
.fetured-btn
  margin-top: 41px
@include tablet
  .fetured
    margin-top: 154px
  .fetured-list
    justify-content: space-around
@include screen
  .fetured
    margin-top: 65px
  .fetured-list
    justify-content: space-between
</style>
