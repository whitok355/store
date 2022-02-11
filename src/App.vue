<template>
  <div class="wrapper">
    <top />
    <router-view />
    <services id="services" :services="services" />
    <subscribe id="Subscribe" />
    <bottom />
  </div>
</template>

<script>
import top from "./components/top";
import services from "./components/services";
import subscribe from "./components/subscribe";
import bottom from "./components/footer/footer";
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: { top, services, subscribe, bottom },
  mounted() {
    this.getLocalStorageA("cartGoods");
  },
  methods: {
    ...mapActions(["getLocalStorageA"]),
  },
  computed: {
    ...mapState({
      services: (state) => state.servicesModule.services,
    }),
  },
};
</script>

<style lang="sass">
*
  font-family: 'Lato', sans-serif
  margin: 0
  padding: 0
</style>
