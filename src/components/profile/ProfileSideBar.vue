<template>
  <div class="card-profile">
    <div class="row">
        <div class="container">
            <div class="mx-auto display-avatar"></div>
        </div>
    </div>
    <div class="my-3"></div>
    <div class="flex-column">
        <div class="my-3">
            <h6>Name:</h6>
            <!--<p>{{ user.name }}</p>-->
            <p>Sample Name</p>
        </div>
        <hr />
        <div class="my-3">
            <h6>Email:</h6>
            <!--<p>{{ user.email }}</p>-->
            <p>example@email.com</p>
        </div>
        <hr />
        <div class="my-3">
            <h6>Address:</h6>
            <!--<p>{{ user.address }}</p>-->
            <p>Thimphu, Babesa, 11001</p>
        </div>
        <hr />
            <h6>Phone:</h6>
            <!--<p>{{ user.phone }}</p>-->
            <p>+975-17891234</p>
        <hr />
        <div class="my-3">
            <button class="btn logout-btn" @click="handleSignOut">Logout</button>
        </div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'ProfileSideBar',
}
</script>
<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = async () => {
   await signOut(auth).then( () => {
     alert('Signed out successfully');
    router.push("/");
  });
}
</script>

<style scoped>
.display-avatar{
    background-image: url("https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
}
.card-profile{
    background: #fff;
    border-radius: .25rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
    height: 100%;
    padding: 2rem;
}
.logout-btn{
    background: linear-gradient(to bottom right, #f7941e, #f9741e);
    border-radius: 20rem;
    padding: 0.5rem 2rem;
    border: none;
    color: white;
    transition: 800ms;
}
.logout-btn:hover{
    background: linear-gradient(to bottom right, #f9741e, #f7941e);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
</style>