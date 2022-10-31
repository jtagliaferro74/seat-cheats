<template>
	<!-- v-click-outside="onClickOutside" -->
	<!-- @focus="handleFocus"
		@focusout="handleFocusOut" -->
	<div
		tabindex="0"
		ref="draggableContainer"
		id="draggable-container"
		class="draggable-container"
		@focus="handleFocus"
	>
		<slot name="header">
			<!-- <span @mousedown="dragMouseDown" class="hand-icon">✋</span> -->
			<span @touchstart="dragTouchDown" @mousedown="dragMouseDown" class="hand-icon">✋</span>
		</slot>
		<div class="body" @click="clickOnBody">
			<slot name="body"> </slot>
		</div>
		<!-- <div class="utility-container" tabindex="0" v-show="showUtils">
			<slot name="utility-drawer"></slot>
		</div> -->
	</div>
</template>

<script>
	// import vClickOutside from "click-outside-vue3";
	export default {
		name: "DraggableDiv",
		// directives: {
		// 	clickOutside: vClickOutside.directive,
		// },
		props: {
			name: {
				type: String,
				default: "Student",
			},
			top: {
				type: String,
				default: null,
			},
			left: {
				type: String,
				default: null,
			},
		},
		mounted() {
			if (this.top) {
				// console.log(this.top);
				// console.log(this.$refs.draggableContainer);
				this.$refs.draggableContainer.style.top = this.top;
			}
			if (this.left) {
				// console.log(this.top);
				// console.log(this.$refs.draggableContainer);
				this.$refs.draggableContainer.style.left = this.left;
			}

			this.updateZIndex();
		},
		// beforeUpdate() {
		// 	if (this.top) {
		// 		// console.log(this.top);
		// 		// console.log(this.$refs.draggableContainer);
		// 		this.$refs.draggableContainer.style.top = this.top;
		// 	}
		// 	if (this.left) {
		// 		// console.log(this.top);
		// 		// console.log(this.$refs.draggableContainer);
		// 		this.$refs.draggableContainer.style.left = this.left;
		// 	}

		// 	this.updateZIndex();
		// },
		data() {
			return {
				showUtils: false,
				positions: {
					clientX: undefined,
					clientY: undefined,
					movementX: 0,
					movementY: 0,
				},
			};
		},
		methods: {
			// onClickOutside(event) {
			// 	console.log("Clicked outside. Event: ", event);
			// },

			getMaxZIndex() {
				return Math.max(
					...Array.from(document.querySelectorAll(".canvas .draggable-div"), (el) =>
						parseFloat(window.getComputedStyle(el).zIndex)
					).filter((zIndex) => !Number.isNaN(zIndex)),
					0
				);
			},
			handleFocus() {
				// this.showUtils = true;
				this.updateZIndex();
				// this.$emit("focusDiv");
			},
			// handleFocusOut() {
			// 	this.showUtils = false;
			// 	this.$emit("loseFocusDiv");
			// },

			updateZIndex() {
				let maxIndex = this.getMaxZIndex();
				if (maxIndex > this.$refs.draggableContainer.style.zIndex || maxIndex === 0) {
					// console.log(`incrementing z-index from ${maxIndex} to ${maxIndex + 1}`);
					this.$refs.draggableContainer.style.zIndex = maxIndex + 1;
				}
			},

			dragTouchDown(e) {
				e.preventDefault();
				// console.log("touch");

				this.updateZIndex();

				// get the mouse cursor position at startup:
				this.positions.clientX = e.clientX;
				this.positions.clientY = e.clientY;

				document.ontouchmove = this.elementTouchDrag;
				document.ontouchend = this.closeDragElement;

				// this.$refs.draggableContainer.style.zIndex = 100;
			},
			dragMouseDown(e) {
				e.preventDefault();
				// console.log("mouse");

				this.updateZIndex();

				// get the mouse cursor position at startup:
				this.positions.clientX = e.clientX;
				this.positions.clientY = e.clientY;

				document.ontouchmove = this.elementDrag;
				document.ontouchend = this.closeDragElement;

				document.onmousemove = this.elementDrag;
				document.onmouseup = this.closeDragElement;
				// this.$refs.draggableContainer.style.zIndex = 100;
			},

			elementDrag(e) {
				e.preventDefault();

				this.positions.movementX = this.positions.clientX - e.clientX;
				this.positions.movementY = this.positions.clientY - e.clientY;

				this.positions.clientX = e.clientX;
				this.positions.clientY = e.clientY;

				// set the element's new position:
				// clamped to 0
				this.$refs.draggableContainer.style.top =
					Math.max(
						0,
						this.$refs.draggableContainer.offsetTop - this.positions.movementY
					) + "px";

				this.$refs.draggableContainer.style.left =
					Math.max(
						-30,
						this.$refs.draggableContainer.offsetLeft - this.positions.movementX
					) + "px";

				// this.$refs.draggableContainer.style.bottom =
				// 	this.$refs.draggableContainer.offsetTop -
				// 	this.positions.movementY +
				// 	this.$refs.draggableContainer.style.height +
				// 	"px";

				// this.$refs.draggableContainer.style.right =
				// 	this.$refs.draggableContainer.offsetLeft -
				// 	this.positions.movementX +
				// 	this.$refs.draggableContainer.style.width +
				// 	"px";
			},
			elementTouchDrag(e) {
				e.preventDefault();

				let touch = e.touches[0];

				this.positions.movementX = this.positions.clientX - touch.pageX;
				this.positions.movementY = this.positions.clientY - touch.pageY;

				this.positions.clientX = touch.pageX;
				this.positions.clientY = touch.pageY;

				// set the element's new position:
				this.$refs.draggableContainer.style.top =
					this.$refs.draggableContainer.offsetTop - this.positions.movementY + "px";

				this.$refs.draggableContainer.style.left =
					this.$refs.draggableContainer.offsetLeft - this.positions.movementX + "px";
			},

			closeDragElement(e) {
				document.onmouseup = null;
				document.onmousemove = null;
				document.ontouchmove = null;
				document.ontouchend = null;
				// this.handleFocusOut();
				document.activeElement?.blur();
				this.$emit("stopDragging", e);
				// this.$refs.draggableContainer.style.zIndex = 1;
			},
			clickOnBody() {
				this.$emit("clickOnBody");
			},
		},
	};
	// let reportWindowSize = () => {
	// 	console.log("resizing");
	// };
	// window.onresize = reportWindowSize();
</script>

<style scoped>
	.body {
		height: 100px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* font-family: "Avenir", Helvetica, Arial, sans-serif; */
	}
	.utility-container {
		position: absolute;
		bottom: -10%;
		left: -9%;
		width: 120%;
		padding: 0.25rem;
		/* text-align: center; */
		/* height: 30%; */
		/* border: 1px solid red; */
		background-color: rgb(255, 242, 185);
		box-shadow: 0px 4px 0px rgba(0, 0, 0);
		border: 2px solid rgba(0, 0, 0);
		border-radius: 0.5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
		/* z-index: 9999; */
	}
	.draggable-container {
		touch-action: none;
		/* box-sizing: border-box; */
		padding: 0.5rem;

		border: 1px solid rgba(0, 0, 0);
		/* border: 1px solid rgba(0, 0, 0, 0.1); */
		box-shadow: 2px 2px 0px rgba(0, 0, 0);
		border-radius: 0.65rem;

		width: 6.25em;
		height: 6.25em;

		position: absolute;
		top: auto;
		left: auto;

		transform: translate(50%, 50%);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		/* margin: 2rem; */
	}

	/* .draggable-container:focus {
		transform: scale(1.00002);
	} */

	.hand-icon {
		font-size: 1.2em;
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.2em;
		cursor: move;
		user-select: none;
		opacity: 0;
		transition: opacity 0.1s ease-in;
	}

	.draggable-container:hover .hand-icon {
		opacity: 1;
	}
</style>
