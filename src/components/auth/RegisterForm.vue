<template>
  <form class="auth-form-register" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <h3 class="auth-header mt-3 mb-4">Join our Shine family!</h3>

      <div class="row mb-3">
        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <label class="form-label" for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            class="form-control input-control"
            placeholder="first name"
            required
            v-model="firstName"
          />
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <label class="form-label" for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            class="form-control input-control"
            placeholder="last name"
            required
            v-model="lastName"
          />
        </div>
      </div>

      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control input-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        required
        placeholder="email@example.com"
      />
    </div>
    <div class="mb-3">
      <label for="InputPassword" class="form-label">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control input-control"
        id="InputPassword"
        placeholder="********"
        required
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label no-account-register" for="exampleCheck1"
        >By Signing Up, I agree to
        <RouterLink to="/terms">Terms & Conditions</RouterLink> of Shine.
      </label>
    </div>
    <button type="submit" class="btn submit-btn mt-3">Register</button>
    <div class="no-account-register mt-3 mb-3">
      Already have an account? Login <RouterLink to="/login">Here</RouterLink>.
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://test.hemantbhutanrealestate.com/api/register",
        {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        }
      );
      console.log(response);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.auth-form-register {
  width: 550px;
  max-width: 550px;
  margin: 2rem auto;
  padding: 2.5rem;
  text-align: left;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.auth-header {
  text-align: center;
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
  width: 50%;
}

.submit-btn:hover {
  background: #f0dfca;
  color: #f7941e;
  border: 1px solid #f7941e;
}
</style>
