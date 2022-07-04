<template>
    <div class="container-fluid my-5">
        <div v-for="article in articles" :key="article.id">
            <div class="article-card" v-if="article.slug === $route.params.slug">
                <div class="row my-3">
                    <div class="col-md-12 d-flex">
                        <img :src="siteURL + 'uploads/' + article.file_path" :alt="article.title"
                            class="img-fluid img-prop col-md-12" loading="lazy" />
                    </div>
                </div>
                <div class="hr my-4"></div>
                <section class="row px-5">
                    <h3 class="my-1">{{article.title}}</h3>
                    <p v-if="!article.content" class="article-text">
                        <span v-html="articleSample"></span><br>
                        <em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                    </p>
                    <p v-else>
                        <span v-html="article.content"></span>
                    </p>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <a :href="siteURL + 'news/' + article.slug" target="_blank">
                        <button class="btn-buy"><i class="bi bi-eye"></i>Write a Comment</button>
                    </a>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "ArticleDetails",

    data() {
        const articleSample = '<h4><img src="/uploads/0000/1/2022/06/26/brokpa.jpg" alt="" /></h4><h4>&nbsp;</h4><h4>Where does it come from?</h4><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p> <p>&nbsp;</p> <h4>Where can I get some?</h4><p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>';
        return {
            articleSample,
        }
    },
    async setup() {
        const articles = ref(null);
        const siteURL = "https://dev.hemantbhutanrealestate.com/";
        const bc_articles = await fetch(
            "https://dev.hemantbhutanrealestate.com/api/articles"
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
.article-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
}
.img-prop{
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 5px;
    object-fit: cover;
}
.hr {
    background: #dedede;
    width: 100%;
    height: 1px;
}
.btn-buy {
    background: #f7941e;
    color: #fff;
    border-radius: 20rem;
    padding: 0.5rem 1rem;
    border: none;
}

.btn-buy:hover {
    background: #f9741e;
}
.article-text{
    text-align: justify;
}
</style>
