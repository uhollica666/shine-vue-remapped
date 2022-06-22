<template>
    <form class="auth-form">
        <div class="mb-3">
            <h3 class="auth-header mt-3 mb-3">Forgot Password?</h3>
            <p class="auth-header mt-3 mb-3">We got you covered. To reset your password, enter your email address below
            </p>
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control input-control my-3" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="email@example.com" required>
        </div>
        <button type="submit" class="btn submit-btn my-3">Reset Password</button>
        <div class="no-account-register mt-3 mb-3">
            Remember your passwrod? Back to <RouterLink to="/login">Login</RouterLink>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: "",
        };
    },
}
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