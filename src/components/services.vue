<template>
  <div class="wrapper-service">
    <div class="container">
      <div class="services">
        <template v-for="(item, i) of services" :key="i">
          <div class="service">
            <img class="setvice__icon" :src="generationUrl(item)" :alt="item.title" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.discription }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "services",
  methods: {
    generationUrl(item) {
      return require(`../assets/icons/${item.icon}.svg`);
    },
  },
  computed:{
    ...mapState({
      services: state => state.servicesModule.services
    })
  }
};
</script>
<style lang="sass" scoped>
.wrapper-service
  background: $dark
  padding: 46px 20px
.services
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.service
  margin-top: 46px
  max-width: 330px
  display: flex
  flex-direction: column
  align-items: center
  color: white
  text-align: center
.service h3, p
  margin-top: 20px
@include screen
  .wrapper-service
    padding: 103px 0
  .services
    flex-direction: row
    justify-content: space-between
</style>
