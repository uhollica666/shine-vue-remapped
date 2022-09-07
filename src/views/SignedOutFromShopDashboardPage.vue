<template>
  <div class="loggedout-page">
    <iframe
      id="timeouttwo"
      src="#"
      width="0"
      height="0"
      style="display: none"
    ></iframe>
  </div>
</template>

<script>
const shop = "https://shop.shinebhutan.com";
const user = localStorage.getItem("userName");
const email = localStorage.getItem("StorageBucket-S3-UserId");
const password = localStorage.getItem("SessionDataStorageBucket-S3-token");
const siteURL = `https://shop.shinebhutan.com/api/v1/shoplogout?email=${email}&password=${password}`;
export default {
  name: "SignedOutFromShopDashboardPage",
  data() {
    return {
      user,
      shop,
      siteURL,
    };
  },
  mounted() {
    alert("Logged Out Successfully"),
      (document.getElementById("timeouttwo").src = this.siteURL);
    setTimeout((window.location.href = "https://shinebhutan.com"), 500);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("StorageBucket-S3-UserId");
    localStorage.removeItem("SessionDataStorageBucket-S3-token");
    this.$store.dispatch("user", null);
  },
};
</script>

<style scoped>
.loggedout-page {
  background: #fff;
  min-height: 100vh;
}
</style>
