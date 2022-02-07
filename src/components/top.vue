<template>
  <div class="wrapper-top">
    <div class="container">
      <div class="top">
        <div class="top-block">
          <logo />
          <search />
        </div>
        <div class="top-block">
          <burger @click="changeVisibleA('navigation')" />
          <navigation />
          <acc @click="changeVisibleA('account')" />
          <iconCart @click="changeVisibleA('miniCart')" />
          <cartMini />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "./icons/logo";
import search from "./icons/search";
import burger from "./icons/burger";
import acc from "./icons/acc";
import iconCart from "./icons/icon-cart";
import navigation from "./elements/navigation";
import cartMini from "./cart/mini-cart";
import { mapActions } from "vuex";

export default {
  name: "top",
  components: { logo, search, burger, acc, iconCart, navigation, cartMini },
  methods: {
    ...mapActions(["changeVisibleA"]),
  },
};
</script>
<style lang="sass" scoped>
.counter
  display: flex
.wrapper-top
  background: $dark
  position: relative
.top
  display: flex
  justify-content: space-between
  align-content: center
  padding: 18px
.top-block
  display: flex
  align-items: center
.logo
  margin-right: 41px
.acc
  margin-right: 25px
.icon-cart
  display: none
@include tablet
  .top
    padding: 18px 32px
  .counter
    position: absolute
    top: -7px
    right: -8px
    width: 21px
    height: 21px
    background: $darkPink
    border-radius: 50px
    color: white
    text-align: center
  .icon-cart
    display: block
    position: relative
  .burger
    margin-right: 25px
@include screen
  .top
    padding: 18px 0
</style>
