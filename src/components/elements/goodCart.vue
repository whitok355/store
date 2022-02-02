<template>
  <div class="good-cart" v-for="(item, i) in goods" :key="i">
    <div class="good-image"><img :src="generationImage(item)" :alt="item.title" /></div>
    <div class="good-info">
      <h5>MANGO PEOPLE T-SHIRT</h5>
      <div class="good-parameters">
        <p>
          Price: $<span>{{ item.price }}</span>
        </p>
        <p>
          Color: <span>{{ item.color }}</span>
        </p>
        <p>
          Size: <span>{{ item.size }}</span>
        </p>
        <p>
          Quantity: <span>{{ item.quantity }}</span>
        </p>
      </div>
    </div>
    <close @click="removeGoodActions(item)" />
  </div>
</template>
<script>
import close from "../icons/close";
import { mapActions } from "vuex";
export default {
  name: "good",
  components: { close },
  props: {
    goods: {
      type: Array,
    },
  },
  methods: {
    ...mapActions(["removeGood"]),
    removeGoodActions(item) {
      this.removeGood(item);
    },
    generationImage(item) {
      return require(`../../assets/pictures/goods/${item.id}.png`);
    },
  },
};
</script>
<style lang="sass" scoped>
.good-cart
  display: flex
  justify-content: space-between
  width: 100%
  height: 100%
  box-shadow: $shadow
  padding: 8px
  box-sizing: border-box
.good-image
  width: 40%
.good-image img
  height: 100%
  width: 100%
.good-info
  display: flex
  flex-direction: column
  justify-content: space-around
.good-parameters
  display: flex
  flex-direction: column
  justify-content: space-between
.good-parameters p
  font-weight: 900
.good-parameters span
  font-weight: 300
@include tablet
  .good-cart
    padding: 16px
</style>
