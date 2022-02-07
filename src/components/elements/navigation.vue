<template>
  <div :class="visibleValue ? 'hidden' : 'navigation'">
    <div class="close" @click="changeVisibleA('navigation')">
      <close />
    </div>
    <div class="content">
      <h2>NAVIGATION</h2>
      <ul>
        <li @click="updateDisplayCounteA">
          <router-link to="/" @click="changeVisibleA('navigation')">Home</router-link>
        </li>
        <li>
          <router-link to="/login/" @click="changeVisibleA('navigation')"
            >Account</router-link
          >
        </li>
        <li @click="filterA('fetured')">
          <router-link to="/catalog/" @click="changeVisibleA('navigation')"
            >Catalog</router-link
          >
        </li>
        <li>
          <router-link to="/cart/" @click="changeVisibleA('navigation')"
            >Cart</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import close from "../icons/close";
import { mapState, mapActions } from "vuex";
export default {
  name: "navigation",
  components: { close },
  methods: {
    ...mapActions(["filterA", "updateDisplayCounteA", "changeVisibleA"]),
  },
  computed: {
    ...mapState({
      visibleValue: (state) => state.visibleModule.navigation,
    }),
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
