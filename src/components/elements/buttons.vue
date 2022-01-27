<template>
  <button :class="this.classBtn">{{ text }}</button>
</template>
<script>
export default {
  name: "buttons",
  props: {
    text: {
      type: String,
      default: "Press",
    },
    classBtn: {
      type: String,
      default: "pink-button",
    },
  },
};
</script>
<style lang="sass" scoped>
.pink-button
  border: 1px solid $darkPink
  padding: 14px 38px
  font-size: 16px
  color: $darkPink
.grey-button
  border: 1px solid $darkGrey
  padding: 8px 17px
  font-size: 12px
  color: $darkGrey
.button:hover
  cursor: pointer
</style>
