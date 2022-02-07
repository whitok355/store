<template>
  <div class="container">
    <div class="category">
      <template v-for="(item, index) of category" :key="index">
        <router-link to="/catalog/" class="category-box" @click="filt(item.title)">
          <img :src="imageGenerator(item)" :alt="item.title" />
          <div class="category-box-content">
            <h3>{{ item.text }}</h3>
            <h2>FOR {{ item.title }}</h2>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "category",
  methods: {
    imageGenerator(item) {
      return require(`../../assets/pictures/category/${item.title}.png`);
    },
  },
};
</script>
<style lang="sass" scoped>
.category
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.category-box
  position: relative
  height: 248px
  width: 343px
  margin-top: 32px
.category-box:last-child
  height: 111px
  width: 343px
.category-box img
  display: block
  width: 100%
  height: 100%
.category-box-content
  position: absolute
  top: 0
  display: flex
  height: 100%
  width: 100%
  flex-direction: column
  justify-content: center
  align-items: center
.category-box-content h3
  color: white
  font-size: 16px
  font-weight: 400
.category-box-content h2
  color: $darkPink
  text-transform: uppercase
@include tablet
  .category
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
  .category-box
    margin-top: 20px
  .category-box:not(:last-child)
    max-width: 232px
    max-height: 167px
  .category-box:last-child
    width: 100%
    height: 116px
  .category-box:last-child img
    width: 100%
    height: 116px
@include screen
  .category-box:not(:last-child)
    width: 260px
    mheight: 260px
  .category-box:last-child
    height: 180px
  .category-box:last-child img
    height: 180px
</style>
