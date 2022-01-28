<template>
  <div :class="this.$store.state.navVisible ? 'hidden' : 'navigation'">
    <div class="close">
      <close @click="changeVisibleActions('navVisible')" />
    </div>
    <div class="content">
      <h2>NAVIGATION</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login/">Account</a>
        </li>
        <li>
          <a href="/catalog/">Catalog</a>
        </li>
        <li>
          <a href="/cart/">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import close from "../icons/close";
import { mapActions } from 'vuex';

export default {
  name: "navigation",
  components: { close },
  methods: {
    ...mapActions(['changeVisible']),
    changeVisibleActions(value){
      this.changeVisible(value)
    },
  },
};
</script>
<style lang="sass" scoped>
.navigation
  position: absolute
  top: 0
  right: 0
  background: $whiteMilk
  display: flex
  flex-direction: column
  align-items: center
  z-index: 1
  width: 100vw
  min-height: 100vh
  padding: 30px
  overflow: auto
.navigation h2
  color: $darkPink
  font-weight: 900
.navigation li
  list-style-type: none
  padding-top: 30px
  font-size: 16px
  color: $dark
.content
  margin-top: 30px
.close
  display: flex
  width: 100%
  justify-content: flex-end
@include tablet
  .navigation
    width: 20vw
    height: 100vh
    box-sizing: border-box
    top: 74px
</style>
