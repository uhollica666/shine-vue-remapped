<template>
  <form class="auth-form-register" @submit.prevent>
    <div class="mb-3">
      <h3 class="auth-header mt-3 mb-4">Register with Shine</h3>

      <div class="row mb-3">
        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <label class="form-label" for="firstName">First Name</label>
          <input type="text" id="firstName" class="form-control input-control" placeholder="first name" required
            v-model="firstName" />
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <label class="form-label" for="lastName">Last Name</label>
          <input type="text" id="lastName" class="form-control input-control" placeholder="last name" required
            v-model="lastName" />
        </div>
      </div>

      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control input-control" id="exampleInputEmail1"
        aria-describedby="emailHelp" required placeholder="email@example.com" />
    </div>
    <div class="mb-3">
      <label for="InputPassword" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control input-control" id="InputPassword"
        placeholder="********" required />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label no-account-register" for="exampleCheck1" required>By Signing Up, I agree to
        <RouterLink to="/terms">Terms & Conditions</RouterLink> of Shine.
      </label>
    </div>
    <div class="d-flex flexi-btn">
      <button class="btn submit-btn" @click="signIn"><i class="bi bi-lock"></i>Register</button>
      <button class="btn ggle-btn" @click="googleSignIn"><i class="bi bi-google"></i>Continue With Google</button>
    </div>
    <div class="no-account-register my-3">
      Already have an account? Login <RouterLink to="/login">Here</RouterLink>.
    </div>

    <hr class="my-4" />

    <div class="mt-3 reg mx-auto auth-header-two">
      <h5 class="mb-3">Own a Handicraft or a Tourism Business? Sell With Us</h5>
      <div class="flex-column text-start">
        <p class="no-account-register">
          Click <a :href="'https://booking.shinebhutan.com/register'">Here</a> to register for your Tourism.
        </p>
        <p class="no-account-register">
          And click <a :href="'https://shop.shinebhutan.com/' + 'shops/create'">Here</a> to register for your Handicraft
          store.
        </p>
      </div>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
// const authURL = 'https://users.shinebhutan.com/api';

const signIn = () => {

  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      alert('Successfully Registered with:' + data.user.email);

      console.log(auth.currentUser)
      
      router.push('/login');
    })
    .catch((error) => {
      console.log(error.code);
    alert(error.message);
  });
};

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      alert('Hello:'+ result.user);
      router.push('/');
    })
    .catch((error) => {
      alert(error.message);
    });
};

</script>

<style scoped>
.flexi-btn{
  display: flex;
  justify-content: space-between;
}

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
  width: 50%;
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
</style>
