<template>
  <div class="wrapper-the-brand">
    <div class="container">
      <div class="the-brand">
        <div class="left"></div>
        <div class="right">
          <div class="wrapper-right">
            <div class="container-right">
              <div class="container-right__title">THE BRAND</div>
              <div class="container-right__subtitle">
                OF LUXORIUS <span> FASHION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "theBrand",
};
</script>
<style lang="sass" scoped>
.wrapper-the-brand
    background: $lightPink
.the-brand
    min-height: 90vh
    display: flex
    align-items: center
    justify-content: center
    position: relative
.left
    display: none
.right
    display: flex
.wrapper-right
    border-left: 12px solid $darkPink
.container-right
    margin-left: 15px
    &__title
        font-weight: 900
        font-size: 37px
    &__subtitle
        font-weight: 700
        font-size: 20px
        letter-spacing: 0.5px
    &__subtitle span
        color: $darkPink
@include tablet
    .left
        display: block
        width: 50%
        min-height: inherit
        background-image: url("../../assets/pictures/man-background.png")
        background-position: center center
        background-repeat: no-repeat
        background-size: cover
    .right
        width: 50%
        justify-content: center
    .container-right__title
        font-size: 44px
    .container-right__subtitle
        font-size: 24px
@include screen
    .left
        background-size: cover
        background-position: center bottom
    .container-right__title
        font-size: 48px
    .container-right__subtitle
        font-size: 31px
</style>
