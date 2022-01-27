<template>
  <div :class="this.$store.state.navVisible ? 'hidden' : 'navigation'">
    <div class="close">
      <close @click="changeVisible('navVisible')" />
    </div>
    <div class="content">
      <h2>NAVIGATION</h2>
      <ul>
        <li>
          <a @click="changeVisible" href="/">Home</a>
        </li>
        <li>
          <a @click="changeVisible" href="/login/">Account</a>
        </li>
        <li>
          <a @click="changeVisible" href="/catalog/">Catalog</a>
        </li>
        <li>
          <a @click="changeVisible" href="/cart/">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import close from "../icons/close";
export default {
  name: "navigation",
  components: { close },
  methods: {
    changeVisible(value) {
      this.$store.dispatch("changeVisible", value);
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
