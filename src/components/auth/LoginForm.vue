<template>
  <div class="login-bg py-5">
    <form class="auth-form" @submit.prevent="login">
      <div class="mb-3">
        <h3 class="auth-header mt-3 mb-3">User Login</h3>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control input-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="email@example.com" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="InputPassword" class="form-label">Password</label>
        <input type="password" class="form-control input-control" id="InputPassword" placeholder="********"
          v-model="password" required />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
      </div>

      <div class="d-flex flexi-btn">
        <button class="btn submit-btn">
          <i class="bi bi-lock text-light"></i>Sign In
        </button>
      </div>
      <div class="no-account-register mt-3 mb-3">
        Don't have an account? Register
        <RouterLink to="/register">Here</RouterLink>. <br />Forgot
        <a :href="shopURL + 'password/reset'">Password?</a>
      </div>

      <hr class="my-4" />

      <div class="my-4 reg mx-auto auth-header-two text-center">
        <h4 class="my-3">Login to your Business Dashboard</h4>
        <div class="flex-column text-center">
          <p class="no-account-register">
            <RouterLink to="/vendor-login">Login Here</RouterLink> for your
            Tourism / Hotel Dashboard.
          </p>
          <p class="no-account-register">
            Or
            <RouterLink to="/ecom-vendor-login">Login Here</RouterLink> for your
            Ecommerce / Handicraft Store.
          </p>
        </div>
      </div>
    </form>
    <iframe id="timeout" src="#" width="0" height="0" style="display: none"></iframe>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
const shopURL = "https://shop.shinenbuy.com/";
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      shopURL,
    };
  },

  methods: {
    async login() {
      const tokenRandOne = Math.random().toString(32).slice(2);
      const tokenRandTwo = Math.random().toString(22).slice(2);
      const tokenRandThree = Math.random().toString(24).slice(2);
      const tokenRandFour = Math.random().toString(36).slice(2);
      const resLogin = ref(null);
      const loginNow = await axios
        .post(`apilogin?email=${this.email}&password=${this.password}`)
        .catch((error) => {
          console.log(error.message);
        });

      if (loginNow.data.token_type) {
        resLogin.value = await loginNow.data;
        alert("login successful.");
        localStorage.setItem("token", resLogin.value.access_token);
        localStorage.setItem("userName", resLogin.value.userdetails.name);
        localStorage.setItem("userType", resLogin.value.userdetails.user_type);
        localStorage.setItem("StorageBucket-S3-UserId", this.email);
        localStorage.setItem(
          "SessionDataStorageBucket-S3-token",
          tokenRandOne +
            tokenRandTwo +
            tokenRandFour +
            tokenRandThree +
            "¬" +
            this.password +
            "¬" +
            tokenRandTwo +
            tokenRandOne +
            tokenRandTwo +
            tokenRandFour +
            tokenRandOne
        );
        setTimeout(() => {
          document.getElementById(
            "timeout"
          ).src = `https://shop.shinenbuy.com/api/v1/shopdash?email=${this.email}&password=${this.password}`;
          setTimeout(() => {
            window.location.href = `https://shinenbuy.com`;
          }, 600);
        }, 600);

        // setTimeout((window.location.href = `${shopURL}profile`), 10000);
      } else if (loginNow.data.message.toLowerCase().includes("unauthorized")) {
        alert("Login Error: " + loginNow.data.message);
        this.$router.push("/login");
      } else {
        alert("Something went wrong, Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.ger-500 {
  background: rgba(255, 0, 0, 0.18);
  border-radius: 5px;
}

.suc-ger-500 {
  background: rgba(0, 128, 0, 0.18);
  border-radius: 5px;
}

.flexi-btn {
  display: flex;
  justify-content: space-between;
}

.login-bg {
  background: url(https://images.unsplash.com/photo-1596516112161-e98045590f64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) no-repeat center center fixed;
  /* background:linear-gradient(to bottom right,rgba(247, 148, 30,0.2) 0%,rgba(51, 51, 105,0.2) 100%); */
  background-size: cover;
  opacity: 0.9;
  height: 100vh;
  /* position: relative; */
}

.auth-form {
  width: 35vw;
  margin: auto;
  padding: 2rem;
  text-align: left;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.auth-header {
  text-align: center;
  color: #333369;
}

.auth-header-two {
  color: #333369;
}

.no-account-register {
  font-size: small;
  color: #2c3e50;
}

.no-account-register a {
  text-decoration: none;
  color: #f7941e;
  font-weight: 500;
}

.no-account-register a:hover {
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.input-control {
  border: none;
  border-bottom: 2px solid #333369;
  border-radius: 0;
}

.submit-btn {
  background: #f7941e;
  color: #fff;
  border-radius: 10rem;
  width: 45%;
}

.ggle-btn {
  background: #4c8bf5;
  color: #fff;
  border-radius: 10rem;
  width: 45%;
}

.submit-btn:hover {
  background: #f0dfca;
  color: #f7941e;
  border: 1px solid #f7941e;
}

.ggle-btn:hover {
  background: #c2d8fe;
  color: #0f48aa;
  border: 1px solid #0f48aa;
}

@media screen and (max-width: 768px) {
  .auth-form {
    width: 95vw;
  }
}
</style>