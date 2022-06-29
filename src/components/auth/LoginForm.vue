<template>
    <form class="auth-form" @submit.prevent="handleSubmit">
        <div class="mb-3">
            <h3 class="auth-header mt-3 mb-3">Login to Shine!</h3>
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
        <button type="submit" class="btn submit-btn">Login</button>
        <div class="no-account-register mt-3 mb-3">
            Don't have an account? Register <RouterLink to="/register">Here</RouterLink>.
            <br />Forgot <RouterLink to="/forgotPassword">Password?</RouterLink>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginForm',
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async handleSubmit() {
            const response = await axios.get('login', {
                email: this.email,
                password: this.password,
            });
            localStorage.setItem('token', response.data.token)
            this.$store.dispatch('user', response.data.user);
            this.$router.push('/');

        },

    },

};
</script>

<style scoped>
.auth-form {
    width: 450px;
    max-width: 450px;
    margin: 2rem auto;
    padding: 2rem;
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