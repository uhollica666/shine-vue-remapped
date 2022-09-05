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
const email = localStorage.getItem("uid_em_frm-lgin");
const password = localStorage.getItem("uid_psw_frm-lgin");
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
    document.getElementById("timeouttwo").src = this.siteURL
    setTimeout((window.location.href = "https://shinebhutan.com"), 500);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("uid_em_frm-lgin");
    localStorage.removeItem("uid_psw_frm-lgin");
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