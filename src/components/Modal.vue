<template>
	<transition name="modal-animation">
		<div v-show="modalActive" class="modal">
			<transition name="modal-animation-inner">
				<div v-show="modalActive" class="modal-inner">
					<!-- Modal Content-->
					<div class="modal-content">
						<div class="modal-header">
							<h2>{{ modalTitle }}</h2>
							<button class="close-btn" type="button" @click="close">&times;</button>
						</div>
						<slot name="body" />
					</div>
					<!--<button type="button" @click="close" >Close</button>-->
				</div>
			</transition>
		</div>
	</transition>
</template>

<script>
	// import Card from "../components/Card.vue"
	export default {
		name: "Modal",
		props: ["modalTitle", "modalActive"],
		methods: {
			close() {
				this.$emit("close");
			},
		},
	};
</script>

<style scoped>
	.modal-animation-enter-active,
	.modal-animation-leave-active {
		transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}
	.modal-animation-enter-from,
	.modal-animation-leave-to {
		opacity: 0;
	}
	.modal-animation-inner-enter-active {
		transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
	}
	.modal-animation-inner-leave-active {
		transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}
	.modal-animation-inner-enter-from {
		opacity: 0;
		transform: scale(0.8);
	}
	.modal-animation-inner-leave-to {
		transform: scale(0.8);
	}
	.modal {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 9999;
		backdrop-filter: blur(3px);
		font-size: 1.2rem;
	}

	.modal .modal-inner {
		border-radius: 10px;
		margin-top: 5rem;
		position: relative;
		min-width: 250px;
		width: 40%;
		max-width: 475px;
		max-height: 80%;
		box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
		background-color: #ffffbe;
		padding: 26px;
		overflow-y: auto;
	}

	.modal-inner::-webkit-scrollbar {
		width: 14px;
		/*height:100px;*/
	}

	/* Track */
	.modal-inner::-webkit-scrollbar-track {
		/*box-shadow: inset 0 0 2px grey;*/
		background-color: rgba(0, 0, 0, 0);
		/*width:16px;*/
		border-radius: 20px;
	}

	/* Handle */
	.modal-inner::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background-color: #d3d3d3;
		/*width:8px;*/
		border-radius: 10px;
		background-clip: padding-box;
	}

	/* Handle on hover */
	.modal-inner::-webkit-scrollbar-thumb:hover {
		background-color: #006185;
	}

	.modal-inner::-webkit-scrollbar-button {
		border: solid 1px transparent;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 12px;
		border-bottom: 2px solid black;
		margin-bottom: 20px;
	}

	.modal-header h2 {
		color: black;
		margin: 0;
		font-size: 2rem;
	}

	.modal-header .close-btn {
		border: none;
		background-color: rgba(200, 200, 200, 0.1);
		padding: 10px;
		padding-top: 0;
		padding-bottom: 0;
		border-radius: 5px;
		color: black;
		font-size: 32px;
		cursor: pointer;
		/* transition: background-color 0.2s ease-out, color 0.2s ease-out; */
	}

	.modal-header .close-btn:hover {
		background-color: #ea6c92;
		color: white;
	}
</style>
