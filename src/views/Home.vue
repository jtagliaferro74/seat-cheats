<template>
	<div class="content">
		<div class="hero">
			<div class="heading">
				<h1>Seat Cheats</h1>
				<p>Classroom Seating Chart Manager</p>
			</div>
			<router-link class="new-btn" to="/new">New Seating Chart ➡</router-link>
		</div>

		<h2>My Charts</h2>
		<div class="classroom-links-container">
			<router-link
				v-for="(classroom, i) in allClasses"
				:key="i"
				class="classroom-link-btn"
				:to="`/${i}`"
			>
				{{ classroom.name }}
			</router-link>
		</div>
	</div>
	<!-- <button class="deleteAll">Delete All</button> -->
</template>

<script>
	// import DraggableDiv from "../components/DraggableDiv.vue";
	// import Modal from "../components/Modal.vue";
	import { useClassStore } from "../stores/classStore.js";
	import { mapState } from "pinia";

	// const store = useClassStore();
	export default {
		name: "Home",
		// components: { DraggableDiv, Modal },
		computed: {
			...mapState(useClassStore, {
				allClasses: "classes",
			}),
		},
		created() {},

		data() {
			return {};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		font-size: 4rem;
		margin-bottom: 0;
	}
	.content {
		max-width: 1200px;
		margin: auto;
		font-size: 1.4em;
	}
	.heading {
		margin-bottom: 3rem;
	}
	.hero {
		margin-bottom: 4rem;
	}

	.new-btn {
		background-color: #437055;
		padding: 1rem;
		border-radius: 20px;
		color: white;
	}
	.new-btn:hover {
		background-color: #2e503c;
	}
	.classroom-links-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		/* margin: 5rem;
		margin-top: 0.5rem; */
	}

	.classroom-link-btn {
		padding: 2rem;
		/* height: ; */
		border: 1px solid black;
		border-radius: 8px;
		margin: 4px;
		background-color: #fff;
	}

	a {
		text-decoration: none;
	}
</style>
