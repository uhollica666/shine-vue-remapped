/* eslint-disable vue/multi-word-component-names */
<template>
  <footer class="mt-5 pt-5 footer-div">
    <div class="container text-md-left mb-4">
      <div class="row text-md-left text-lg-left">
        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-1 footer-left-div">
          <img loading="lazy" src="@/assets/img/footer-logo.png" alt="" class="footer-img-logo img-fluid" />
          <p>
            Sustainable Hospitality Industry Inclusive of Native
            Entrepreneurs<br />
            <strong>Contact</strong>: (+975) 1690 9020 | 17388924<br />
            <strong>Email</strong>: info@shinebhutan.com<br />
            <strong>Located:</strong> Above Memorial Chorten<br />
            Chorten Lam, Thimphu 11001 Bhutan
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-note">
          <h5 class="mb-4 footer-heading">Services</h5>
          <div class="footer-link">
            <RouterLink to="/terms"><i class="bi bi-chevron-compact-right"></i>How It
              Works</RouterLink>
          </div>
          <div class="footer-link">
            <a href="https://shine.grat.at"><i class="bi bi-chevron-compact-right"></i>Go To SHINE Website</a>
          </div>
          <div class="footer-link">
            <RouterLink to="/terms"><i class="bi bi-chevron-compact-right"></i>Terms of
              Service</RouterLink>
          </div>
          <div class="footer-link">
            <RouterLink to="/terms"><i class="bi bi-chevron-compact-right"></i>Privacy
              Policy</RouterLink>
          </div>
          <div class="footer-link">
            <RouterLink to="/terms"><i class="bi bi-chevron-compact-right"></i>Help Desk</RouterLink>
          </div>
          <div class="footer-link">
            <a href="/sitemap.xml">
              <i class="bi bi-chevron-compact-right"></i>Site Map
            </a>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-note">
          <h5 class="mb-4 footer-heading">Support</h5>
          <div class="footer-link">
            <a href="callto:+97517388924"><i class="bi bi-chevron-compact-right"></i>(+975) 17388924</a>
          </div>
          <div class="footer-link">
            <RouterLink to="/"><i class="bi bi-chevron-compact-right"></i>Contact Us</RouterLink>
          </div>
          <div class="footer-link">
            <RouterLink to="/"><i class="bi bi-chevron-compact-right"></i>FAQs</RouterLink>
          </div>
          <div class="footer-link">
            <RouterLink to="/terms"><i class="bi bi-chevron-compact-right"></i>Travel
              Insurance</RouterLink>
          </div>
          <div class="footer-link">
            <RouterLink to="/terms"><i class="bi bi-chevron-compact-right"></i>Travel
              Agent</RouterLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-xl-3 mx-auto mt-3 footer-newsletter">
          <h5 class="mb-4 footer-heading">Download our App</h5>
          <div class="flex-column">
            <div class="d-flex store-link">
              <p>For Android Users:</p>
              <a href="https://play.google.com/store/search?q=shine&c=apps">
                <img src="@/assets/img/app_btn_google.png" alt="" class="store-btn" />
              </a>
            </div>
            <div class="d-flex store-link">
              <p>For iOS Users:</p>
              <a href="https://www.apple.com/us/search/shine?src=globalnav">
                <img src="@/assets/img/app_btn_apple.png" alt="" class="store-btn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-4 note note-light">
        <div class="col-md-10">
          <strong class="text">
            This website was created and maintained with the financial support
            of the European Union. Its contents are the sole responsibility of
            SHINE project consortium and do not necessarily reflect the views of
            the European Union.
          </strong>
        </div>
        <div class="col-md-2">
          <img src="@/assets/img/SWITCH-Asia_Logo.png" alt="switch-asia" loading="lazy" class="switch-logo-footer" />
        </div>
      </div>
    </div>
    <div class="footer-copy-area">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-8">
            <div class="me-lg-auto text-center text-lg-start">
              <div class="copyright">
                &copy; Copyright {{ currentYear
                                }}<strong><span> Shine</span></strong>. All Rights Reserved
              </div>
            </div>
          </div>
          <div class="col-md-5 col-lg-4">
            <div class="footer-social-links text-center text-lg-right pt-3 pt-lg-0">
              <a href="https://twitter.com/shine" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="https://facebook.com/shine_bhutan" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="https://instagram.com/shine_bhutan" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/user/shine" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.switch-logo-footer {
  max-width: 100%;
}

.store-link {
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem auto;
}

.store-btn {
  /* width: 60%; */
  max-width: 200px;
}

input.mail-in {
  border-radius: 10rem;
  border: none;
  padding: 0.5rem;
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0);
}

input.subscribe-btn {
  background: #f7941e;
  color: #fff;
  border-radius: 10rem;
  border: none;
  padding: 0.5rem;
  width: 25%;
  margin: 0 2.5%;
}

input.subscribe-btn:hover {
  background: #e8dbcb;
  color: #f7941e;
  border: #f7941e solid 1px;
}

.footer-div {
  background: #cecbcc;
}

.footer-img-logo {
  width: 90%;
  margin-bottom: 1rem;
}

.footer-heading {
  color: #2c3e50;
  font-weight: 600;
}

.footer-left-div,
.footer-note {
  text-align: left;
}

.footer-link a {
  color: #2c3e50;
  text-decoration: none;
  line-height: 2.5rem;
}

.footer-link a i {
  font-size: larger;
  color: #f7941e;
}

.footer-link a:hover,
.footer-link a i:hover {
  color: #f9741e;
}

.footer-copy-area {
  background-color: #333369;
  padding: 1.5rem 0.5rem;
}

.copyright {
  color: #fff;
}

.footer-social-links {
  align-content: center;
  justify-content: center;
}

.footer-social-links a {
  /* margin:1rem; */
  padding: 0;
}

.footer-social-links a i {
  color: #f7941e;
  padding: 0.5rem;
}

.footer-social-links a i:hover {
  color: #f9741e;
}
</style>