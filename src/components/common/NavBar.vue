<template>
  <div>
    <div class="header-top">
      <div class="container-fluid">
        <div class="row clearfix" style="max-height: 50px">
          <div class="col-md-6 col-sm-6">
            <div class="contact contact_space">
              <ul class="top-bar top-bar-left">
                <li>
                  <a href="mailto:info@shinenbuy.com"><i class="bi bi-send-check"></i>info@shinenbuy.com</a>
                </li>
                <li>
                  <a href="callto:+97517388924"><i class="bi bi-phone"></i>(+975) 1690 9020 | 17388924</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="contact contact_space">
              <ul class="top-bar top-bar-right" style="padding-top: 5px">
                <div v-if="user" class="d-flex">
                  <div class="dropdown logged-user-menu mx-3">
                    <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi dropdown-icon bi-person"></i>Hi, {{ user }}
                    </button>
                    <ul class="dropdown-menu px-0 mx-0" aria-labelledby="dropdownMenuButton">
                      <!-- Greeting Menu -->
                      <li class="px-1 mx-0">
                        <div class="dropdown-item text-dark profile-link" @click="authDashboard()"
                          v-if="userType === 'admin' || userType === 'staff'">
                          <i class="bi bi-person-square"></i>Admin Profile
                        </div>
                        <div class="dropdown-item text-dark profile-link" @click="authDashboard()"
                          v-else-if="userType === 'customer'">
                          <i class="bi bi-person-square"></i>My User Profile
                        </div>
                        <div class="dropdown-item text-dark profile-link" @click="authDashboard()"
                          v-else-if="userType === 'seller'">
                          <i class="bi bi-person-square"></i>Ecommerce Vendor
                          Profile
                        </div>
                        <div class="dropdown-item text-dark profile-link" @click="bookingProfile()" v-else>
                          <i class="bi bi-person-square"></i>Vendor Profile
                        </div>
                      </li>
                      <!-- Greeting End -->

                      <!-- Admin Menu Start -->
                      <div v-show="userType === 'admin' || userType === 'staff'">
                        <li class="px-1 mx-0">
                          <a href="javascript:void(0)" class="dropdown-item text-dark" @click="loginInBooking()">
                            <i class="bi bi-shield-lock"></i>Go to Booking Admin
                          </a>
                        </li>
                        <li class="px-1 mx-0">
                          <a :href="'https://shop.shinenbuy.com/admin'" class="dropdown-item text-dark">
                            <i class="bi bi-toggles"></i>Go to Ecommerce Admin
                          </a>
                        </li>
                      </div>
                      <!-- Admin Menu End -->

                      <!-- Vendor Menu -->
                      <div v-show="
                                                (userType === 'seller' && auth_token) ||
                                                (!auth_token && !userType)
                                              ">
                        <li class="px-1 mx-0">
                          <a class="dropdown-item text-secondary" href="javascript:void(0)">
                            Vendors Area<i class="bi bi-chevron-double-down ms-2 text-secondary"></i>
                          </a>
                        </li>
                        <li class="px-1 ms-3" v-if="!auth_token && !userType">
                          <a href="javascript:void(0)" class="dropdown-item text-dark" @click="gotoBookingDashboard()">
                            <i class="bi bi-house-door"></i>Go To Vendor
                            Dashboard
                          </a>
                        </li>
                        <li class="px-1 ms-3" v-if="userType === 'seller'">
                          <a href="javascript:void(0)" class="dropdown-item text-dark" @click="gotoShopDashboard()">
                            <i class="bi bi-shop-window"></i>Go To Ecommerce
                            Dashboard
                          </a>
                        </li>
                      </div>

                      <!-- Logout  -->
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li class="px-1 mx-0">
                        <a href="javascript:void(0)" @click="handleSignOut" class="dropdown-item text-dark">
                          <i class="bi bi-box-arrow-right"></i>Logout
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- Show Cart and Wishlists Icons for Ecommerce Users -->
                  <div class="cart d-flex" v-if="userType === 'customer'">
                    <a :href="`https://shop.shinenbuy.com/cart`" style="padding-top: 8px" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Go to Cart">
                      <div class="d-flex">
                        <i class="bi bi-basket"></i>
                        <div class="cart-items cart-items-present"></div>
                      </div>
                    </a>
                    <span class="mx-2"></span>
                    <a :href="`https://shop.shinenbuy.com/wishlists`" style="padding-top: 8px" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Go to Wishlist">
                      <div class="d-flex">
                        <i class="bi bi-heart"></i>
                        <div class="cart-items cart-items-present"></div>
                      </div>
                    </a>
                    <span class="mx-2"></span>
                  </div>
                </div>

                <!-- Logged Out Menu -->
                <div v-else class="d-flex">
                  <RouterLink to="/register">
                    <button class="btn text-white" type="button">
                      <i class="bi bi-lock"></i>Register
                    </button>
                  </RouterLink>
                  <div class="dropdown">
                    <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                      data-mdb-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-person-bounding-box"></i>Login
                    </button>
                    <ul class="dropdown-menu px-0 mx-0" aria-labelledby="dropdownMenuButton">
                      <li>
                        <div class="dropdown-item text-secondary">
                          Login<i class="bi bi-chevron-compact-down text-secondary"></i>
                        </div>
                      </li>
                      <li class="px-1 ms-3">
                        <RouterLink to="/login" class="dropdown-item text-dark"><i class="bi bi-person-bounding-box"></i>
                          User
                          Login</RouterLink>
                      </li>
                      <li>
                        <div class="dropdown-item text-secondary">
                          Vendor Zone
                          <i class="bi bi-chevron-compact-down text-secondary"></i>
                        </div>
                      </li>
                      <li class="px-1 ms-3">
                        <RouterLink to="/vendor-login" class="dropdown-item text-dark"><i
                            class="bi bi-person-video2"></i>Tourism Vendor
                          Login</RouterLink>
                      </li>
                      <li class="px-1 ms-3">
                        <RouterLink to="/ecom-vendor-login" class="dropdown-item text-dark"><i
                            class="bi bi-cart4"></i>Ecommerce Vendor
                          Login</RouterLink>
                      </li>
                      <li>
                        <div class="dropdown-item text-secondary">
                          Admin Area
                          <i class="bi bi-chevron-compact-down text-secondary"></i>
                        </div>
                      </li>
                      <li class="px-1 ms-3">
                        <RouterLink to="/admin-login" class="dropdown-item text-dark"><i
                            class="bi bi-person-video2"></i>Login to Admin
                          Area</RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear-fix"></div>
    <iframe id="timeout" src="#" width="0" height="0" style="display: none">
    </iframe>
    <iframe id="book-logout" src="#" width="0" height="0" style="display: none"></iframe>
    <StickyNav />
  </div>
</template>

<script>
import StickyNav from "@/components/common/StickyNav";
import { mapGetters } from "vuex";
// import axios from "axios";
import { ref } from "vue";
// const apiV2 = "https://shop.shinenbuy.com/api/v2/";
const shop = "https://shop.shinenbuy.com";
const booking = "https://booking.shinenbuy.com";
const password = localStorage.getItem("SessionDataStorageBucket-S3-token");
const user = localStorage.getItem("userName");
const userType = localStorage.getItem("userType");
const email = localStorage.getItem("StorageBucket-S3-UserId");
const siteURL = `https://shop.shinenbuy.com/api/v1/shoplogout?email=${email}&password=`;
const bookURL = `https://booking.shinenbuy.com/api/booklogout?email=${email}&password=`;

let adminMenu = ref(null);
export default {
  name: "NavBar",
  components: {
    StickyNav,
  },
  setup() {
    const auth_token = localStorage.getItem("token");

    return {
      auth_token,
    };
  },

  data() {
    return {
      password,
      user,
      userType,
      shop,
      adminMenu,
      siteURL,
      booking,
      bookURL,
    };
  },
  methods: {
    handleSignOut() {
      const newPass = password.split("¬")[1];
      alert("Logged Out Successfully");
      setTimeout(
        () => (document.getElementById("timeout").src = siteURL + newPass),
        300
      );
      setTimeout(
        () => (document.getElementById("book-logout").src = bookURL + newPass),
        300
      );
      setTimeout(() => (window.location.href = "https://shinenbuy.com"), 800);
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userType");
      localStorage.removeItem("StorageBucket-S3-UserId");
      localStorage.removeItem("SessionDataStorageBucket-S3-token");
      this.$store.dispatch("user", null);
    },
    authDashboard() {
      setTimeout(() => {
        if (user === "main-Admin" || user === "Shine Admin") {
          window.location.href = `${shop}/admin/profile`;
        } else {
          window.location.href = `${shop}/profile`;
        }
      }, 300);
    },
    loginInBooking() {
      const newPass = password.split("¬")[1];
      setTimeout(
        () =>
          (document.getElementById(
            "timeout"
          ).src = `${booking}/api/shopdash?email=${email}&password=${newPass}`),
        200
      );
      setTimeout(
        () => (window.location.href = ` https://booking.shinenbuy.com/admin`),
        1000
      );
    },
    gotoShopDashboard() {
      const newPass = password.split("¬")[1];
      setTimeout(
        () =>
          (window.location.href = `${shop}/api/v1/shopdash?email=${email}&password=${newPass}`),
        300
      );
    },
    bookingProfile() {
      setTimeout(() => (window.location.href = `${booking}/user/profile`), 300);
    },
    gotoBookingDashboard() {
      setTimeout(
        () => (window.location.href = `${booking}/user/dashboard`),
        300
      );
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.dropdown-menu {
  z-index: 9999;
}

.cart-items-present {
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 5px;
  width: 5px;
  background: red;
  border-radius: 20px;
}

.bi-basket,
.bi-heart,
.bi-arrow-repeat {
  color: #f7941e;
}

.profile-link {
  cursor: pointer;
}

.logged-user-menu {
  z-index: 10000;
}

nav.navbar {
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 9999;
}

.nav-item-list {
  margin-left: auto;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 1rem;
  font-weight: 600;
}

nav a:hover,
.bi.dropdown-icon {
  color: #f7941e;
}

nav a.router-link-exact-active {
  color: #f9741e;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
}

.header-top {
  background: #333369;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.top-bar {
  list-style: none;
  margin: 0;
  padding: 10px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar li {
  margin: 0 1rem;
}

.top-bar li a {
  color: #fff;
  text-decoration: none;
}

.top-bar li a:hover {
  color: #f7941e;
}

.top-bar li i {
  color: #f7941e;
  padding: 0 0.5rem;
  align-items: center;
}

.top-bar li i:hover {
  color: #7d7dd3;
}

.top-bar-left {
  justify-content: left;
  align-items: center;
  padding: auto 0;
}

.top-bar-right {
  justify-content: flex-end;
  align-items: center;
  padding: auto 0;
}

.navbar-toggler {
  border: none;
  background: transparent;
  color: #f7941e;
  font-size: 32px;
  font-weight: bold;
}

@media only screen and (max-width: 990px) {
  .top-bar {
    flex-direction: column;
  }

  .top-bar-left {
    text-align: left;
    justify-content: center;
    align-content: center;
  }

  .top-bar-right {
    text-align: left;
    justify-content: center;
    align-content: center;
  }

  .nav-item {
    margin: 1rem 0;
    text-align: right;
    align-content: flex-end;
  }
}

@media only screen and (max-width: 576px) {
  .top-bar-left {
    display: none;
  }
}
</style>
