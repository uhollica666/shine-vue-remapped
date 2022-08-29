<template>
  <div>
    <div class="header-top">
      <div class="container-fluid">
        <div class="row clearfix" style="max-height: 50px">
          <div class="col-md-6 col-sm-6">
            <div class="contact contact_space">
              <ul class="top-bar top-bar-left">
                <li>
                  <a href="mailto:info@shinebhutan.com"><i class="bi bi-send-check"></i>info@shinebhutan.com</a>
                </li>
                <li>
                  <a href="callto:+975 2 338089"><i class="bi bi-phone"></i>+975-2-338089</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="contact contact_space">
              <ul class="top-bar top-bar-right">
                <div v-if="user">
                  <div class="dropdown logged-user-menu mx-5">
                    <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi dropdown-icon bi-person"></i>Hi, {{  user  }}
                    </button>
                    <ul class="dropdown-menu px-0 mx-0" aria-labelledby="dropdownMenuButton">
                      <li class="px-1 mx-0">
                        <div class="dropdown-item text-dark profile-link" @click="authDashboard()">
                          <i class="bi bi-person-square"></i>My Profile
                        </div>
                      </li>

                      <li class="px-1 mx-0" v-show="user === 'main-Admin'">
                        <a :href="'https://booking.shinebhutan.com/' + 'admin'" class="dropdown-item text-dark">
                          <i class="bi bi-shield-lock"></i>Tourism Admin
                        </a>
                      </li>
                      <li class="px-1 mx-0" v-show="user === 'main-Admin'">
                        <a :href="'https://shop.shinebhutan.com/admin'" class="dropdown-item text-dark">
                          <i class="bi bi-toggles"></i>Ecommerce Admin
                        </a>
                      </li>

                      <li class="px-1 mx-0" v-show="user === 'Shine Admin'">
                        <a :href="'https://booking.shinebhutan.com/' + 'admin'" class="dropdown-item text-dark">
                          <i class="bi bi-shield-lock"></i>Tourism Admin
                        </a>
                      </li>
                      <li class="px-1 mx-0" v-show="user === 'Shine Admin'">
                        <a :href="'https://shop.shinebhutan.com/admin'" class="dropdown-item text-dark">
                          <i class="bi bi-toggles"></i>Ecommerce Admin
                        </a>
                      </li>

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
                </div>
                <div v-else class="d-flex">
                  <li>
                    <RouterLink to="/register"><i class="bi bi-lock"></i>Register</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/login"><i class="bi bi-person-bounding-box"></i>Login</RouterLink>
                  </li>
                </div>
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
import StickyNav from "@/components/common/StickyNav";
import { mapGetters } from "vuex";
import { ref } from "vue";
import axios from "axios";
const shop = "https://shop.shinebhutan.com";
const user = localStorage.getItem("userName");
let adminMenu = ref(null);
export default {
  name: "NavBar",
  components: {
    StickyNav,
  },
  data() {
    return {
      user,
      shop,
      adminMenu,
    };
  },
  methods: {
    async handleSignOut() {
      await axios
        .get(
          `https://shop.shinebhutan.com/api/v1/shoplogout?name=${user}`
        )
        .then((res) => {
          if (res.message == "success") {
            localStorage.removeItem("token");
            localStorage.removeItem("userName");
            this.$store.dispatch("user", null);
            alert("Successfully signed out");
            setTimeout(() => this.$router.push("/login"), 300);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    },

    authDashboard() {
      setTimeout(() => {
        if (user === "main-Admin" || user === "Shine Admin") {
          window.location.href = `${shop}/admin`;
        } else {
          window.location.href = `${shop}/dashboard`;
        }
      }, 300);
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
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