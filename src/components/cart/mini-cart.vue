<template>
  <div :class="this.$store.state.cartVisible ? 'hidden' : 'cart-mini'">
    <div class="close" @click="changeVisibleActions('cartVisible')">close cart <close /></div>
    <div class="wrapper-mini-cart" v-if="goods.length > 0">
      <goodCart :goods="goods"/>
    </div>
    <div class="wrapper-mini-cart" v-else>Your cart empty</div>
  </div>
</template>
<script>
import goodCart from "../elements/goodCart";
import close from "../icons/close";
import { mapState, mapActions } from 'vuex'
export default {
  name: "cartMini",
  components: { goodCart, close },
  methods: {
    ...mapActions(['changeVisible']),
    changeVisibleActions(value){
      this.changeVisible(value)
    }
  },
  computed: {
    ...mapState({
      goods: state => state.goodsModule.cartGoods
    })
  },
};
</script>
<style lang="sass">
.cart-mini
    display: none
@include tablet
    .cart-mini
        display: block
        position: absolute
        top: 84px
        right: 5%
        background: $whiteMilk
        box-shadow: $shadow
        max-height: 500px
        overflow: auto
        z-index: 1
    .wrapper-mini-cart
        width: 300px
        max-height: 150px
        padding:10px
        text-align: center
    .close
      display: flex
      align-items: center
      justify-content: flex-end
      width: inherit
      padding: 10px
    .close svg
      margin-left: 10px
    .close:hover
      cursor: pointer
@include screen
    .cart-mini
        right: 10%
</style>
