<template>
  <div>
    <div class="header-top">
      <div class="container-fluid">
        <div class="row clearfix">
          <div class="col-md-6 col-sm-6">
            <div class="contact contact_space">
              <ul class="top-bar top-bar-left">
                <li>
                  <a href="mailto:info@shinebhutan.com"
                    ><i class="bi bi-send-check"></i>info@shinebhutan.com</a
                  >
                </li>
                <li>
                  <a href="callto:+975 2 338089"
                    ><i class="bi bi-phone"></i>+975-2-338089</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="contact contact_space">
              <ul class="top-bar top-bar-right">
                <li>
                  <div class="dropdown logged-user-menu mr-5 my-0">
                    <button
                      class="btn dropdown-toggle text-white"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-person-bounding-box"></i> Become A Vendor
                    </button>
                    <ul
                      class="dropdown-menu px-0 mx-0"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li class="px-1 mx-0 my-3">
                        <a
                          :href="'https://booking.shinebhutan.com/register'"
                          class="dropdown-item text-dark"
                          target="_blank"
                        >
                          <i class="bi bi-speedometer2"></i>Tourism Vendor
                        </a>
                      </li>
                      <li class="px-1 mx-0 my-3">
                        <a
                          :href="
                            'https://shop.shinebhutan.com/' + 'shops/create'
                          "
                          class="dropdown-item text-dark"
                          target="_blank"
                        >
                          <i class="bi bi-basket2"></i>Ecommerce Vendor
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <div v-if="!user" class="d-flex mx-3">
                  <li>
                    <RouterLink to="/login"
                      ><i class="bi bi-box-arrow-in-right"></i>Login
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/register"
                      ><i class="bi bi-lock"></i>Register</RouterLink
                    >
                  </li>
                </div>
                <div v-if="user">
                  <div class="dropdown logged-user-menu mx-5">
                    <button
                      class="btn dropdown-toggle text-white"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi dropdown-icon bi-person"></i> Hi,
                      {{ user.firstName }} {{ user.lastName }}
                    </button>
                    <ul
                      class="dropdown-menu px-0 mx-0"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-speedometer2"></i>Tourism Vendor
                        </RouterLink>
                      </li>
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-basket2"></i>Ecommerce Vendor
                        </RouterLink>
                      </li>
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-person-square"></i>My Profile
                        </RouterLink>
                      </li>
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-shield-lock"></i>Change Password
                        </RouterLink>
                      </li>
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-toggles"></i>Admin Dashboard
                        </RouterLink>
                      </li>
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-clock-history"></i>Booking Hostory
                        </RouterLink>
                      </li>
                      <li class="px-1 mx-0">
                        <RouterLink to="#" class="dropdown-item text-dark">
                          <i class="bi bi-cart-check"></i>Order Hostory
                        </RouterLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li class="px-1 mx-0">
                        <a
                          href="javascript:void(0)"
                          @click="handleClick"
                          class="dropdown-item text-dark"
                        >
                          <i class="bi bi-box-arrow-right"></i>Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <li>
                  <LightDarkSwitch class="mx-3" />
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear-fix"></div>
    <StickyNav />
  </div>
</template>

<script>
// import LightDarkSwitch from "@/components/LightDarkSwitch";
import StickyNav from "@/components/common/StickyNav";
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      isDark: false,
      siteUrl: "https://users.shinebhutan.com",
    };
  },
  components: {
    // LightDarkSwitch,
    StickyNav,
  },
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
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
  justify-content: flex-start;
  height: 100%;
  align-items: center;
}

.top-bar-right {
  justify-content: flex-end;
  align-items: center;
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
