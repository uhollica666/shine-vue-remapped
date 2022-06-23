<template>
  <div>
    <div class="blog-post-topic">
      <h4 class="text-center p-3">
        Popular Attraction of {{ $route.params.location_id }}
      </h4>
      <p class="text-center">Explore the stories and weekly blog updates</p>
    </div>
    <div class="row flex-row flex-nowrap overflow-auto mb-5">
      <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 mt-3 mx-auto" v-for="story in stories" :key="story.id">
        <div class="card mt-3 mb-3">
          <div class="card-body">
            <img :src="apiURL + story.file_path" alt="" class="card-img-blog img-fluid"
              :data-src="apiURL + story.file_path" />
            <RouterLink :to="siteURL + '/en/news/' + story.slug" class="category-details">
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ story.title }}
                </h6>
                <p class="post-details text-truncate">{{ story.content }}</p>
                <div class="location text-truncate">
                  <i class="bi bi-tag"></i> Category: {{ story.name }}
                </div>
                <p class="my-3">
                  <i class="bi bi-calendar"></i> Posted on
                  {{ story.created_at }}
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BlogPost",
  async setup() {
    const stories = ref(null);
    const apiURL = "http://shine.test/uploads/";
    const siteURL = "http://shine.test/";
    const bc_stories = await fetch("http://shine.test/api/articles");
    stories.value = await bc_stories.json();

    return {
      stories,
      apiURL,
      siteURL,
    };
  },
};
</script>

<style scoped>
i.bi {
  margin-right: 0.5rem;
}

.card-img-blog {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>