<template>
  <div class="wrapper-cart wrapper-main">
    <div class="container">
      <div class="cart">
        <h2>SHOPPING CART</h2>
        <div class="cart-list">
          <div class="wrapper-good-cart">
            <goodCart />
          </div>
        </div>
        <div class="cart-btn">
          <buttons :text="'Clear shopping cart'" :classBtn="'grey-button'" />
          <router-link to="/catalog/"
            ><buttons :text="'Continue shopping'" :classBtn="'grey-button'"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goodCart from "../elements/goodCart";
import buttons from "../elements/buttons";
export default {
  name: "cart",
  components: { goodCart, buttons },
};
</script>
<style lang="sass" scoped>
.wrapper-category
    background: $whiteMilk
.cart
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
.cart-list
    margin-top: 64px
.cart h2
    color: $darkPink
.cart-btn
  display: flex
  justify-content: space-between
  margin-top: 41px
.cart-btn a:last-child
  margin-left: 10px
.wrapper-good-cart
  min-height: 160px
  min-width: 304px
@include tablet
  .wrapper-good-cart
    height: 306px
    width: 734px
  .cart-btn a:last-child
    margin-left: 48px
@include screen
  .wrapper-good-cart
    width: 652px
</style>
