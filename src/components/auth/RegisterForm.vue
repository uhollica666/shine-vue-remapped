<template>
  <div class="login-bg py-5">
    <form class="auth-form-register" @submit.prevent="register">
      <div class="mb-3">
        <h3 class="auth-header mt-3 mb-4">User Registration</h3>
      </div>
      <div class="mb-3">
        <label class="form-label" for="firstName">Full Name <span class="text-danger">*</span></label>
        <input type="text" id="firstName" class="form-control input-control" placeholder="Full Name" required
          v-model="name" />
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address <span class="text-danger">*</span></label>
        <input v-model="email" type="email" class="form-control input-control" id="exampleInputEmail1"
          aria-describedby="emailHelp" required placeholder="email@example.com" />
      </div>
      <div class="mb-3">
        <label for="InputPassword" class="form-label">Password <span class="text-danger">*</span></label>
        <input v-model="password" type="password" class="form-control input-control" id="InputPassword"
          placeholder="********" required />
      </div>
      <div class="mb-3">
        <label for="InputPassword" class="form-label">Confirm Password <span class="text-danger">*</span></label>
        <input v-model="password_confirmation" type="password" class="form-control input-control"
          id="InputConfirmPassword" placeholder="********" required />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required v-model="agreeTerm" />
        <label class="form-check-label no-account-register" for="exampleCheck1">By Registering, I agree to
          <RouterLink to="/terms">Terms & Conditions</RouterLink> of Shine.
        </label>
      </div>
      <div class="no-account-register my-3">
        Already Registered?
        <RouterLink to="/login">Login Here</RouterLink>.
      </div>
      <div class="d-flex flex-row flexi-btn my-3">
        <button class="btn text-light submit-btn">
          <i class="bi bi-lock text-light"></i>Register
        </button>
      </div>
      <hr class="my-4" />

      <div class="mt-3 reg mx-auto auth-header-two text-center p-3">
        <h3 class="mb-3 mx-auto">Own a Business? Sell With Us</h3>
        <div class="flex-md-column flex-sm-row flex-xs-row text-center">
          <p class="no-account-register">
            <a :href="'https://booking.shinebhutan.com/page/vendor-register'">Click Here</a>
            to register your Tourism / Hotel / Homestay Business.
          </p>
          <p class="no-account-register">
            Or
            <a :href="'https://shop.shinebhutan.com/' + 'shops/create'">Click Here</a>
            to register your Ecommerce / Handicraft Store.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      agreeTerm: "",
    };
  },
  methods: {
    async register() {
      if (this.password === this.password_confirmation) {
        if (this.agreeTerm === null) {
          alert('You need to agree to our Terms & Conditions')
        } else {
          const res = ref(null);
          const registerNow = await axios
            .post(`apiregister`, {
              name: this.name,
              email: this.email,
              password: this.password,
              register_by: "email",
            })
            .catch((error) => {
              console.log(error.message);
            });

          if (registerNow) {
            res.value = await registerNow.data;
            alert(
              `Hi ${this.name}!. You have been successfully registered with ${this.email}!`
            );
            setTimeout(() => {
              this.$router.push("/login"), 3000;
            });
          }
        }
      } else {
        alert('Your Password does not match. Please make sure you enter your password correctly.')
      }
    },
  },
};
</script>

<style scoped>
.flexi-btn {
  display: flex;
  justify-content: space-between;
}

.login-bg {
  background: url(https://images.unsplash.com/photo-1637552588842-6eb9ddef76e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat center center fixed;
  /* background:linear-gradient(to bottom right,rgba(247, 148, 30,0.2) 0%,rgba(51, 51, 105,0.2) 100%); */
  background-size: cover;
  opacity: 0.9;
  min-height: 100vh;
  /* position: relative; */
}

.auth-form-register {
  width: 35vw;
  margin: auto;
  padding: 2.5rem;
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

.ggle-btn:hover {
  background: #c2d8fe;
  color: #0f48aa;
  border: 1px solid #0f48aa;
}

@media screen and (max-width: 768px) {
  .auth-form-register {
    width: 95vw;
  }
}
</style>