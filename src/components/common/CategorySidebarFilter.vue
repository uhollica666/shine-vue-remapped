<template>
	<div class="accordion mt-5 mb-5 accordion-flush sticky-top app-sticky-top">
		<div class="accordion-item">
			<h2 class="accordion-header">
				<button
					class="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="false"
					aria-controls="collapseOne"
				>
					<i class="bi bi-sort-down"></i> Browse Other Categories
				</button>
			</h2>
			<div
				id="collapseOne"
				class="accordion-collapse collapse show"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">
					<div class="c">
						<div class="sidebar-filters">
							<div class="block-1 mb-3">
								<h6>Handicrafts</h6>
								<ul class="home-block handicraft-block">
									<li v-for="handicraft in latestCategoryHandi()" :key="handicraft">
										<RouterLink
											:to="'/category-handicrafts/' + handicraft.name"
											:class="{ active: isActive }"
											>{{ handicraft.name }}</RouterLink
										>
									</li>
								</ul>
							</div>

							<div class="block-2 my-3">
								<h6>Agriculture</h6>
								<ul class="home-block Agriculture-block">
									<li v-for="product in latestCategory()" :key="product">
										<RouterLink
											:to="'/category-agriproducts/' + product.name"
											:class="{ active: isActive }"
											>{{ product.name }}</RouterLink
										>
									</li>
								</ul>
							</div>
							<div class="back-to-home">
								<RouterLink to="/" class="home-button">
									<i class="bi bi-caret-left"></i> Back To Home
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
	name: "CategorySidebarFilter",
	async setup() {
		const homeAgriproducts = ref(null);
		const homeHandicrafts = ref(null);
		const agri = await fetch(
			"https://shop.shinenbuy.com/api/v1/get_frontend_categories?id=4"
		);
		const handi = await fetch(
			"https://shop.shinenbuy.com/api/v1/get_frontend_categories?id=5"
		);
		homeAgriproducts.value = await agri.json();
		homeHandicrafts.value = await handi.json();
		return {
			homeAgriproducts,
			homeHandicrafts,
		};
	},
	methods: {
		latestCategory() {
			return this.homeAgriproducts.sort((a, b) => {
				return b.id - a.id;
			});
		},
		latestCategoryHandi() {
			return this.homeHandicrafts.sort((a, b) => {
				return b.id - a.id;
			});
		},
	},
};
</script>

<style scoped>
li a.router-link-exact-active {
	color: #f7941e !important;
	font-weight: 600;
}

.home-button {
	color: #f7941e;
	text-decoration: none;
}

.image-block img {
	width: 100%;
	border-radius: 5px;
	height: 250px;
	object-fit: cover;
	transition: 300ms;
}

.image-block img:hover {
	filter: brightness(0.5);
}

.app-sticky-top-2 {
	top: 100vh;
	margin-top: 20rem;
}

.app-sticky-top {
	top: 2rem;
}

.accordion-button:not(.collapsed)::after {
	background-image: var(--bs-accordion-btn-icon);
	color: #666 !important;
}

.accordion-button:not(.collapsed) {
	color: #fff !important;
	background-color: #f7941e !important;
	border-radius: 5px 5px 0 0;
}

.accordion-item {
	border: none;
	border-radius: 5px !important;
}

.accordion-body {
	padding: 1rem 1.2rem;
}

.accordion {
	background: #fafafa;
	max-width: 85%;
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

.form-group-range {
	width: 100%;
	display: flex;
	margin: 1rem 0;
}

.input-group-text-minmax {
	border: none;
	margin: 0 0.5rem 0 0;
	align-content: center;
	justify-content: center;
	padding: 0.5rem 0;
}

.input-group input {
	border-radius: 5px;
	text-align: center;
	-webkit-appearance: textfield;
	-moz-appearance: textfield;
}

.separator {
	width: 10%;
	margin: 0 0.5rem;
	text-align: center;
	align-content: center;
	justify-content: center;
	font-size: 16px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.slider {
	height: 8px;
	border-radius: 2rem;
	background: #ddd;
  position: relative;
}

.progress-slider {
  height: 8px;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 2rem;
  background: #f7941e;
}

.range-input {
	position: relative;
}

.range-input input {
	height: 8px;
	position: absolute;
	top: -1.5rem;
	width: 100%;
	background: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	pointer-events: none;
}

input[type="range"]::-webkit-slider-thumb {
	height: 1rem;
	width: 1rem;
	background: #f9741e;
	border-radius: 5rem;
	pointer-events: auto;
	-webkit-appearance: none;
}

input[type="range"]::-moz-range-thumb {
	height: 1rem;
	width: 1rem;
	background: #f9741e;
	border-radius: 5rem;
	pointer-events: auto;
	border: none;
	-moz-appearance: none;
}

.home-block li a {
	color: #2c3e50;
	text-decoration: none;
}

.home-block li a:hover {
	color: #f7941e;
}

.accordion-button.bu#bumbum::after {
	display: none;
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
