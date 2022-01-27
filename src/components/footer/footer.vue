<template>
  <div class="wrapper-footer">
    <div class="container">
      <div class="footer">
        <links />
        <div class="footer-block">
          <p>&copy; 2021 Brand All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import links from "./links";
export default {
  name: "bottom",
  components: { links },
};
</script>
<style lang="sass" scoped>
.wrapper-footer
    background: $dark
.footer
    display: flex
    flex-direction: column
    align-items: center
    padding: 43px 0 9px
.footer-block
    display: flex
    align-items: center
    justify-content: center
.footer-block:last-child
  margin-top: 40px
.footer p
  color: $whiteMilk
@include tablet
  .footer
    flex-direction: row
    justify-content: space-between
    padding: 30px 32px
  .footer-block:last-child
    margin-top: 0
@include screen
  .footer
    padding: 30px 0
</style>
