<template>
  <div v-for="item of items" :key="item.title" class="good">
    <div class="good-show">
      <div class="shadow">
        <div class="shadow-btn" @click="addGood(item)">
          <iconCart :visible="true" />
          <p>{{ text }}</p>
        </div>
      </div>
      <img :src="generationImage(item)" :alt="item.title" />
    </div>
    <div class="good-content">
      <h3 class="good-content__title">{{ item.title }}</h3>
      <p>{{ item.discription }}</p>
      <h5>{{ item.price }}</h5>
    </div>
  </div>
</template>
<script>
import iconCart from "../icons/icon-cart";
export default {
  name: "good",
  components: { iconCart },
  props: {
    items: {
      type: Array,
    },
    text: {
      type: String,
      default: "Press",
    },
  },
  data() {
    return {
      paramVisible: false,
      goods: "",
    };
  },
  methods: {
    generationImage(good) {
      return require(`../../assets/pictures/goods/${good.id}.png`);
    },
    changeVisible() {
      this.paramVisible = !this.paramVisible;
    },
    addGood(item) {
      this.$store.dispatch("addGood", item);
    },
  },
};
</script>
<style lang="sass" scoped>
.good
  max-width: 360px
  min-height: 480px
  margin-top: 16px
  display: flex
  flex-direction: column
.good-show img
  max-width: 100%
  display: block
.good-content
  padding: 13px 24px
  text-align: left
.good-content h5, p
  margin-top: 12px
.shadow
  display: none
.good-show
  position: relative
.good:hover .shadow
  position: absolute
  flex-direction: column
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  background: $darkGrey
  opacity: 0.86
  display: flex
  align-items: center
  justify-content: center
  color: $whiteMilk
.shadow-btn
  border: 1px solid white
  display: flex
  padding: 10px 13px
  align-items: center
.shadow-btn p
  margin-left: 11px
  color: $whiteMilk
.good-params
  display: flex
  flex-direction: column
.good-groupParams
  display: flex
  justify-content: center
.good-groupParams p
  margin-right: 10px
  transition: 0.5s
.good-groupParams p:hover
  border-bottom: 1px solid $whiteMilk
  transform: scale(1.3)
  cursor: pointer
@include tablet
  .good
    margin: 5px
</style>
