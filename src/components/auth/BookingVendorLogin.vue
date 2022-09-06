<template>
    <div class="login-bg py-5">
        <form class="auth-form" @submit.prevent="bookingLogin">
            <div class="mb-3">
                <h3 class="auth-header mt-3 mb-3">Tourism Vendor Login</h3>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Business Name *</label>
                <input type="text" class="form-control input-control" id="exampleInputUserName"
                    aria-describedby="emailHelp" placeholder="Your Registered Business Name" v-model="userName" required />
            </div>
            <div class="my-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control input-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="email@example.com" v-model="email" required />
            </div>
            <div class="my-3">
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
                Forgot
                <a href="https://booking.shinebhutan.com/password/reset">Password?</a>
                <br />
                <br />
                Not A Tourism Vendor? Go to
                <RouterLink to="/login">User Login</RouterLink> Or
                <RouterLink to="/ecom-vendor-login">Ecommerce Vendor Login</RouterLink>.
            </div>
        </form>
        <iframe id="booking-frame" src="#" width="0" height="0" style="display: none"></iframe>
    </div>
</template>

<script>
const bookingURL = "https://booking.shinebhutan.com/";
export default {
    name: "BookingVendorLogin",

    data() {
        return {
            email: "",
            password: "",
            userName: "",
            bookingURL,
        };
    },

    methods: {
        bookingLogin() {
            localStorage.setItem("uid_em_frm-lgin", this.email);
            localStorage.setItem("uid_psw_frm-lgin", this.password);
            localStorage.setItem("userName", this.userName);
            document.getElementById(
                "booking-frame"
            ).src = `${bookingURL}api/shopdash?email=${this.email}&password=${this.password}`;
            setTimeout(
                () =>
                    (window.location.href = `${bookingURL}api/shopdash?email=${this.email}&password=${this.password}`),
                setTimeout(() => alert("login Successful"), 3000),
                3500
            );
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
    background: url(https://images.pexels.com/photos/6540809/pexels-photo-6540809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center fixed;
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