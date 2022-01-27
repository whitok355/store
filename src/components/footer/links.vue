<template>
  <div class="footer-block">
    <facebook :class="'soc-link'" />
    <instagram :class="'soc-link'" />
    <pinterest :class="'soc-link'" />
    <twitter :class="'soc-link'" />
  </div>
</template>
<script>
import facebook from "../icons/facebook";
import instagram from "../icons/instagram";
import pinterest from "../icons/pinterest";
import twitter from "../icons/twitter";

export default {
  name: "links",
  components: { facebook, instagram, pinterest, twitter },
};
</script>
<style lang="sass" scoped></style>
