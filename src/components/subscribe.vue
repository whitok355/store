<template>
  <div class="wrapper-subscribe">
    <div class="container">
      <div class="subscribe">
        <div class="subscribe-block">
          <img src="../assets/pictures/face.png" alt="face" />
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            <span>a pulvinar purus condimentum“</span>
          </p>
        </div>
        <div class="subscribe-block">
          <h2>SUBSCRIBE</h2>
          <p>FOR OUR NEWLETTER AND PROMOTION</p>
          <form class="subscribe-form">
            <input class="subscribe-input" type="text" placeholder="Enter Your Email" />
            <button class="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "subscribe",
};
</script>
<style lang="sass" scoped>
.wrapper-subscribe
    background-image: url('../assets/pictures/background-subscribe.png')
    background-repeat: no-repeat
    background-size: cover
.subscribe
    min-height: 350px
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    text-align: center
.subscribe-block
    max-width: 230px
.subscribe-block span
    font-style: italic
.subscribe-form
    margin-top: 22px
    display: flex
    font-size: 14px
    line-height: 17px
.subscribe-input
    padding: 8px 11px
    border: none
    border-top-left-radius: 50px
    border-bottom-left-radius: 50px
    background: $whiteMilk
    opacity: 0.9
.subscribe-btn
    border-top-right-radius: 50px
    border-bottom-right-radius: 50px
    border: none
    background: $darkPink
    padding: 8px 11px
    color: white
@include screen
  .subscribe
    flex-direction: row
</style>
