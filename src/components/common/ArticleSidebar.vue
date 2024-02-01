<template>
  <div class="accordion my-5 accordion-flush sticky-top app-sticky-top">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="false" aria-controls="collapseOne">
          <i class="bi bi-sort-down"></i>Filters
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="c">
            <div class="sidebar-filters">
              <div class="heading">
                <h6 class="mb-3">Other Articles</h6>
              </div>
              <div class="content-filter">
                <div class="dzo-list" v-for="article in articles" :key="article.id">
                  <RouterLink :to="{ name: 'SingleArticle', params: { slug: article.slug } }"
                    :class="{ active: isActive }">
                    <ul class="lists-dzo">
                      <li v-if="article.title" class="text-capitalize">
                        {{ article.title }}
                      </li>
                      <li v-else>-Article Title NA-</li>
                    </ul>
                  </RouterLink>
                </div>
              </div>
              <div class="back-to-home">
                <RouterLink to="/" class="home-button">
                  <i class="bi bi-caret-left"></i> Return to Home
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ArticleSidebar",

  async setup() {
    const articles = ref(null);
    const siteURL = "https://booking.shinenbuy.com/";
    const bc_articles = await fetch(
      "https://booking.shinenbuy.com/api/articles"
    );
    articles.value = await bc_articles.json();

    return {
      articles,
      siteURL,
    };
  },
};
</script>

<style scoped>
.content-filter {
  max-height: 40vh;
  overflow: auto;
}

a.router-link-exact-active ul li {
  color: #f7941e !important;
  font-weight: 600;
}

.home-button {
  color: #f7941e;
  text-decoration: none;
}

.app-sticky-top {
  top: 2rem;
}

.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-icon);
}

.accordion-button:not(.collapsed) {
  color: #fff !important;
  background-color: #f7941e !important;
}

.accordion-item {
  border: none;
  border-radius: 5px;
}

.accordion-body {
  padding: 1rem 1.2rem;
  border-radius: 10px !important;
}

.accordion {
  background: #fafafa;
  max-width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10px;
}

.sidebar {
  max-width: 100%;
  box-shadow: none;
  padding: 1rem;
}

.accordion-header {
  border-radius: 10px;
}

.lists-dzo {
  text-decoration: none;
  margin: 0.5rem 0;
}

.lists-dzo li {
  color: #2c3e50;
}

@media only screen and (max-width: 992px) {
  .accordion {
    max-width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .accordion {
    max-width: 100%;
  }
}
</style>
