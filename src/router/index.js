import { createWebHistory, createRouter } from "vue-router";
import { nextTick } from "vue";
import Home from "../views/Home.vue";
import SeatCheats from "../views/SeatCheats.vue";

const routes = [
	{
		path: "/",
		name: "Seating Chart Manager | SeatCheats",
		component: Home,
	},
	{
		path: "/:id",
		name: "Class View | SeatCheats",
		component: SeatCheats,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.afterEach((to) => {
	nextTick(() => {
		document.title = to.name || "SeatCheats";
	});
});

export default router;
