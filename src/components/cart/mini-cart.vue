<template>
  <div :class="this.$store.state.cartVisible ? 'hidden' : 'cart-mini'">
    <div class="close" @click="changeVisible('cartVisible')">close cart <close /></div>
    <div class="wrapper-mini-cart" v-if="this.$store.state.cartGoods.length > 0">
      <goodCart />
    </div>
    <div class="wrapper-mini-cart" v-else>Your cart empty</div>
  </div>
</template>
<script>
import goodCart from "../elements/goodCart";
import close from "../icons/close";
export default {
  name: "cartMini",
  components: { goodCart, close },
  methods: {
    changeVisible(value) {
      this.$store.dispatch("changeVisible", value);
    },
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
