import { defineStore } from "pinia";

export const useClassStore = defineStore("classStore", {
	state: () => {
		return {
			classes: [],
		};
	},
	persist: true,
	actions: {
		updateClass(index, updatedClass) {
			this.classes[index] = updatedClass;
		},
	},
	getters: {},
});
