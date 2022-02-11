<template>
  <div class="wrapper-login wrapper-main">
    <div class="container">
      <div class="login">
        <h2>Sign In</h2>
        <form class="login-form">
          <input type="text" placeholder="enter your login" />
          <input type="text" placeholder="Passwrod" />
          <buttons :text="'Sign in'" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import buttons from "../elements/buttons";
export default {
  name: "login",
  components: { buttons },
};
</script>
<style lang="sass" scoped>
.login
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-start
  margin-top: 70px
.login h2
  color: $darkPink
  font-weight: 900
.login-form
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.login-form input
  padding: 5px 10px
  margin-top: 20px
button
  margin-top: 20px
  padding: 5px 20px !important
@include tablet
  .login
    margin-top: 0
    justify-content: center
</style>
