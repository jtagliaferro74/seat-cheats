import { createWebHistory, createRouter } from "vue-router";
import { nextTick } from "vue";
import Home from "../views/Home.vue";
import SeatCheats from "../views/SeatCheats.vue";

const routes = [
	{
		path: "/",
		name: "Seating Chart Manager | Seat Cheats",
		component: Home,
	},
	{
		path: "/:id",
		name: "Class View | Seat Cheats",
		component: SeatCheats,
	},
];

const router = createRouter({
	history: createWebHistory("/seat-cheats/"),
	routes,
});

router.afterEach((to) => {
	nextTick(() => {
		document.title = to.name || "Seat Cheats";
	});
});

export default router;
