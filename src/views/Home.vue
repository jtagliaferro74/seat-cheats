<template>
	<div class="content">
		<div class="hero">
			<h1>SeatCheats</h1>
			<p>Classroom Seating Chart Manager</p>
			<router-link to="/new">New Seating Chart</router-link>
		</div>

		<h2>My Charts</h2>
		<div class="classroom-links-container">
			<div class="classroom-link-btn" v-for="(classroom, i) in allClasses" :key="i">
				<router-link :to="`/${i}`">
					{{ classroom.name }}
				</router-link>
			</div>
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
	.content {
		max-width: 1200px;
		margin: auto;
	}
	.classroom-links-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 5rem;
		margin-top: 0.5rem;
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
