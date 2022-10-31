<template>
	<router-view :key="$route.fullPath" />
</template>

<script>
	// import SeatCheats from "../views/SeatCheats.vue";

	export default {
		name: "App",
		// components: {
		// 	SeatCheats,
		// },
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap");
	html {
		font-size: 85%;
	}
	#app {
		font-family: "Patrick Hand", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		/* color: #2c3e50; */
		/* height: 100vh; */
		/* margin-top: 60px; */
	}
	body {
		margin: 0;
	}

	html {
		margin: 0;
		height: 100vh;
		background-color: rgb(193, 206, 193);
	}
</style>
