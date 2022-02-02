<template>
  <div class="wrapper">
    <top />
    <router-view />
    <services id="Services" />
    <subscribe id="Subscribe" />
    <bottom />
  </div>
</template>

<script>
import top from "./components/top";
import services from "./components/services";
import subscribe from "./components/subscribe";
import bottom from "./components/footer/footer";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { top, services, subscribe, bottom },
  beforeMount() {
    this.getCartGoodsActions();
  },
  methods: {
    ...mapActions(["getCartGoods"]),
    getCartGoodsActions() {
      this.getCartGoods();
    },
  },
};
</script>

<style lang="sass">
*
  font-family: 'Lato', sans-serif
  margin: 0
  padding: 0
</style>
