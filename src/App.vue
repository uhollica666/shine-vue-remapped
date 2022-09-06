<template>
  <div>
    <Suspense>
      <NavBar />
    </Suspense>
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import SiteFooter from "@/components/common/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    SiteFooter,
  },

  async created() {
    const userName = localStorage.getItem("userName");
    this.$store.dispatch("user", userName);
    // const token = localStorage.getItem("token");
    // if (token) {
    //   this.$storeTwo.dispatch("token", token);
    // }
  },
};
</script>

<style>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 60vh;
}

.carousel .welcome-note {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.welcome-note H1 {
  font-size: 3rem;
}

.welcome-note h1,
.welcome-note p {
  margin: 0;
  padding: auto;
  overflow: hidden;
}

.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide-info img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

i.bi {
  margin-right: 0.5rem;
  color: #f9741e;
}

.btn-container {
  justify-content: flex-end;
}

button.limit {
  display: none;
}

.showButton {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
}

.duration-tours {
  display: flex;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 0;
}

.card-body a {
  text-decoration: none;
}

.card-details {
  padding: 0.5rem 1rem;
}

.details {
  display: flex;
}

.location-tours {
  width: 50%;
}

.price {
  text-align: right;
}

.accommodation-details {
  text-decoration: none;
  color: #2c3e50;
}

.accommodation-details:hover {
  color: #f7941e;
}

.btn-preview {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border-radius: 20rem;
  padding: 0.5rem 1rem;
}

.btn-preview:hover {
  background: #f9741e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-container {
  justify-content: flex-end;
}

button.limit {
  display: none;
}

.showButton {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
}

.product-row {
  display: flex;
  justify-content: space-between;
  align-items: left;
}

.preview-buttons {
  display: flex;
  justify-content: space-between;
}

.btn-preview {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border-radius: 20rem;
  padding: 0.5rem 1rem;
}

.btn-preview:hover {
  background: #f9741e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-container {
  justify-content: flex-end;
}

button.limit {
  display: none;
}

.showButton {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
}

.product-row {
  display: flex;
  justify-content: space-between;
  align-items: left;
}

.preview-buttons {
  display: flex;
  justify-content: space-between;
}

.card-details {
  background: #fff;
  border-radius: 5px;
  text-decoration: none;
  color: #2c3e50;
}

.home-sec {
  text-decoration: none;
}

.home-objects {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin: 0 1rem 1rem 1rem;
  padding: 0;
}

.home-objects:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.home-linear-heading {
  max-width: 50%;
  color: #fff;
  background: #f7941e;
  margin: 0;
  border-radius: 5px 5px 0 0;
}

.home-heading {
  color: #fff;
  background: #f7941e;
  margin: 0;
  border-radius: 5px 5px 0 0;
}

.home-tour-group {
  border-radius: 5px;
  padding: 1rem 0;
}

.home-container {
  border-radius: 5px;
}

.product-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

.card-img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  margin: 0;
}

.card-img:hover {
  backdrop-filter: blur(5px) !important;
}

.btn-home {
  background: #f7941e;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  width: 50%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10rem;
}

.btn-home:hover {
  background: #f9741e;
  color: #333369;
}

.btn-container {
  justify-content: flex-end;
}

button.limit {
  display: none;
}

.showButton {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
}

.start-icon {
  color: #f7941e;
  padding: 2px;
  padding-bottom: 5px;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.details {
  display: flex;
}

.location {
  width: 60%;
}

.price {
  text-align: right;
}

.hotel-details {
  text-decoration: none;
  color: #2c3e50;
}

.hotel-details:hover {
  color: #f7941e;
}
</style>