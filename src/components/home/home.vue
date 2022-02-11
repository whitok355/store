<template>
  <div class="wrapper-home">
    <theBrand />
    <div class="wrapper-goods wrapper-main">
      <category id="category" />
      <fetured id="Fetured" />
    </div>
  </div>
</template>
<script>
import theBrand from "./theBrand";
import category from "./category";
import fetured from "./fetured";
export default {
  name: "home",
  components: { theBrand, category, fetured },
};
</script>
<style lang="sass" scoped></style>
