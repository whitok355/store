<template>
  <div class="wrapper-cart wrapper-main">
    <div class="container">
      <div class="cart">
        <h2>SHOPPING CART</h2>
        <div class="cart-list">
          <di v-if="storageData.cartGoods.length < 1"><h3>Your cart is empty</h3></di>
          <div class="wrapper-good-cart" v-else>
            <goodCart :goods="storageData.cartGoods" />
          </div>
        </div>
        <div class="cart-btn">
          <buttons
            :text="'Clear shopping cart'"
            :classBtn="'grey-button'"
            @click="removeAllA('cartGoods')"
          />
          <router-link to="/catalog/">
            <buttons
              :text="'Continue shopping'"
              :classBtn="'grey-button'"
              @click="filterA('fetured')"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goodCart from "../elements/goodCart";
import buttons from "../elements/buttons";
import { mapState, mapActions } from "vuex";
export default {
  name: "cart",
  components: { goodCart, buttons },
  computed: {
    ...mapState(["storageData"]),
  },
  methods: {
    ...mapActions(["removeAllA", "filterA"]),
  },
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
  min-height: 30px
  min-width: 304px
@include tablet
  .wrapper-good-cart
    min-height: 306px
    width: 734px
  .cart-btn a:last-child
    margin-left: 48px
@include screen
  .wrapper-good-cart
    width: 652px
</style>
