<template>
	<div class="navbar noprint">
		<div class="navbar-item home-link-container">
			<router-link to="/">🏠 Home</router-link>
		</div>
		<div class="navbar-item heading-container">
			<h1>{{ activeClass.name }}</h1>
		</div>
		<div class="navbar-item settings-container">
			<label for="classSelect">🏫</label>
			<select v-if="activeClass" @change="changeClass" name="" id="classSelect">
				<option
					v-for="(classroom, i) in allClasses"
					:value="i"
					:key="i"
					:selected="i === activeIndex"
				>
					{{ classroom.name }}
				</option>
				<option value="new">+ New Class</option>
			</select>
			<button @click="openSettingsModal">⚙&#xFE0F;</button>
		</div>
	</div>

	<form @submit.prevent="addStudent" class="add-student-form noprint">
		<div class="add-student-input">
			<input type="text" v-model="newStudent" />
			<button type="submit">Add Student</button>
		</div>
	</form>
	<div class="tools-container noprint">
		<button @click="randomize">Randomize</button>
		<button v-if="swapModeActive" type="button" @click="toggleSwapMode">End Swap</button>
		<button v-else type="button" @click="toggleSwapMode">Swap</button>
		<button @click="saveClass">Save</button>
		<button type="button" @click="print">Print</button>
	</div>
	<!-- <button @click="increaseFontSize">+</button>
	<button @click="decreaseFontSize">-</button> -->
	<div class="canvas">
		<template v-for="(student, i) in activeClass.students" :key="i">
			<!-- @focusDiv="focusStudent(student)"
				@loseFocusDiv="loseFocusStudent(student)" -->
			<DraggableDiv
				:class="[indexIsSelected(i) ? 'selected-for-swap' : '', 'draggable-div']"
				v-if="!student.placeholder"
				:name="student.name"
				:top="student.position.top"
				:left="student.position.left"
				@stop-dragging="stopDragging($event, student)"
				@lock="toggleLock(student)"
				@focus="addToSelected(i)"
			>
				<template #body>
					<button
						v-if="student.locked"
						type="button"
						@click="toggleLock(student)"
						class="lock-icon noprint"
					>
						🔒
					</button>
					<button
						v-else
						type="button"
						@click="toggleLock(student)"
						class="lock-icon lock-icon--unlocked noprint"
					>
						🔓
					</button>
					<p class="student-name">{{ student.name }}</p>
					<button type="button" @click="editStudentClicked($event, i)" class="notes-icon">
						✏&#xFE0F;
					</button>
					<span class="student-icon" v-show="student.icon">
						{{ student.icon }}
					</span>
				</template>
			</DraggableDiv>
		</template>
	</div>

	<!-- <template v-if="editStudent && editStudent.index"> -->
	<Modal modalTitle="Student Notes" :modalActive="editStudentModalActive" @close="closeEditModal">
		<template #body>
			<form @submit.prevent v-if="editStudent && editStudent.index">
				<div class="modal-form-control">
					<label for="studentName">Name</label>
					<input id="studentName" type="text" v-model="editStudent.name" />
				</div>
				<div class="modal-form-control">
					<label for="studentNotes">Notes</label>
					<!-- <input id="studentNotes" type="text" v-model="editStudent.notes" /> -->
					<textarea
						id="studentNotes"
						name="studentNotes"
						rows="6"
						v-model="editStudent.notes"
					/>
				</div>
				<div class="modal-form-control">
					<label for="studentIcon">Icon</label>
					<div class="icon-select">
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '😃' }"
							type="button"
							@click="setStudentIcon('😃')"
						>
							😃
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '😥' }"
							type="button"
							@click="setStudentIcon('😥')"
						>
							😥
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '😰' }"
							type="button"
							@click="setStudentIcon('😰')"
						>
							😰
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '😇' }"
							type="button"
							@click="setStudentIcon('😇')"
						>
							😇
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '👿' }"
							type="button"
							@click="setStudentIcon('👿')"
						>
							👿
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '⭐&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('⭐&#xFE0F;')"
						>
							⭐&#xFE0F;
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '✏&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('✏&#xFE0F;')"
						>
							✏&#xFE0F;
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '📚' }"
							type="button"
							@click="setStudentIcon('📚')"
						>
							📚
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🆕' }"
							type="button"
							@click="setStudentIcon('🆕')"
						>
							🆕
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '⚠&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('⚠&#xFE0F;')"
						>
							⚠&#xFE0F;
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🥜' }"
							type="button"
							@click="setStudentIcon('🥜')"
						>
							🥜
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🍞' }"
							type="button"
							@click="setStudentIcon('🍞')"
						>
							🍞
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🥦' }"
							type="button"
							@click="setStudentIcon('🥦')"
						>
							🥦
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🌽' }"
							type="button"
							@click="setStudentIcon('🌽')"
						>
							🌽
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🥛' }"
							type="button"
							@click="setStudentIcon('🥛')"
						>
							🥛
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🍪' }"
							type="button"
							@click="setStudentIcon('🍪')"
						>
							🍪
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🍫' }"
							type="button"
							@click="setStudentIcon('🍫')"
						>
							🍫
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🍬' }"
							type="button"
							@click="setStudentIcon('🍬')"
						>
							🍬
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '♿' }"
							type="button"
							@click="setStudentIcon('♿')"
						>
							♿
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '⚕&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('⚕&#xFE0F;')"
						>
							⚕&#xFE0F;
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🦯' }"
							type="button"
							@click="setStudentIcon('🦯')"
						>
							🦯
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🌈' }"
							type="button"
							@click="setStudentIcon('🌈')"
						>
							🌈
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '♀&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('♀&#xFE0F;')"
						>
							♀&#xFE0F;
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '♂&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('♂&#xFE0F;')"
						>
							♂&#xFE0F;
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '&#9895;&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('&#9895;&#xFE0F;')"
						>
							&#9895;&#xFE0F;
						</button>
						<button
							:class="{
								'student-icon--selected': editStudent.icon === '❤&#xFE0F;',
							}"
							type="button"
							@click="setStudentIcon('❤&#xFE0F;')"
						>
							❤&#xFE0F;
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🧡' }"
							type="button"
							@click="setStudentIcon('🧡')"
						>
							🧡
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '💛' }"
							type="button"
							@click="setStudentIcon('💛')"
						>
							💛
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '💚' }"
							type="button"
							@click="setStudentIcon('💚')"
						>
							💚
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '💙' }"
							type="button"
							@click="setStudentIcon('💙')"
						>
							💙
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '💜' }"
							type="button"
							@click="setStudentIcon('💜')"
						>
							💜
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🔴' }"
							type="button"
							@click="setStudentIcon('🔴')"
						>
							🔴
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🟠' }"
							type="button"
							@click="setStudentIcon('🟠')"
						>
							🟠
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🟡' }"
							type="button"
							@click="setStudentIcon('🟡')"
						>
							🟡
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🟢' }"
							type="button"
							@click="setStudentIcon('🟢')"
						>
							🟢
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🔵' }"
							type="button"
							@click="setStudentIcon('🔵')"
						>
							🔵
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === '🟣' }"
							type="button"
							@click="setStudentIcon('🟣')"
						>
							🟣
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === 'IEP' }"
							type="button"
							@click="setStudentIcon('IEP')"
						>
							IEP
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === 'ESL' }"
							type="button"
							@click="setStudentIcon('ESL')"
						>
							ESL
						</button>
						<button
							:class="{ 'student-icon--selected': editStudent.icon === 'BSI' }"
							type="button"
							@click="setStudentIcon('BSI')"
						>
							BSI
						</button>
					</div>
				</div>
				<button @click="editClassStudent()">submit</button>
				<button @click="openDeleteStudentModal()">Delete</button>
			</form>
		</template>
	</Modal>

	<Modal
		v-if="activeClass"
		modalTitle="Settings"
		:modalActive="settingsModalActive"
		@close="closeSettingsModal"
	>
		<template #body>
			<form @submit.prevent>
				<div class="modal-form-control">
					<label for="className">Class Name</label>
					<input id="className" type="text" v-model.lazy="activeClass.name" />
				</div>
				<div class="modal-form-control"></div>
				<!-- <button @click="openEditClassNameModal">Change Name</button> -->
				<button type="button" @click="openDeleteClassModal()">Delete This Class</button>
				<button type="submit" @click="saveEditedName()">Submit</button>
				<button type="button" @click="generateJson()">Get JSON</button>
			</form>
		</template>
	</Modal>
	<Modal
		v-if="activeClass"
		modalTitle="Add a Class Name"
		:modalActive="newClassNameModalActive"
		@close="closeNewClassNameModal"
	>
		<template #body>
			<form @submit.prevent>
				<div class="modal-form-control">
					<label for="className">Class Name</label>
					<input id="className" type="text" v-model.lazy="activeClass.name" />
				</div>
				<div class="modal-form-control"></div>
				<button @click="saveEditedName()">Submit</button>
			</form>
		</template>
	</Modal>

	<Modal
		v-if="editStudent"
		modalTitle="Delete Student?"
		:modalActive="deleteStudentModalActive"
		@close="closedeleteStudentModal"
	>
		<template #body>
			<form @submit.prevent>
				<h3>Do you really want to delete {{ editStudent.name }}?</h3>
				<h4>This action can't be undone.</h4>
				<button @click="deleteStudent(editStudent.index)">Delete</button>
			</form>
		</template>
	</Modal>
	<Modal
		v-if="activeIndex"
		modalTitle="Delete Class?"
		:modalActive="deleteClassModalActive"
		@close="closedeleteClassModal"
	>
		<template #body>
			<form @submit.prevent>
				<h3>Do you really want to delete {{ activeClass.name }}?</h3>
				<h4>This action can't be undone.</h4>
				<button @click="deleteClass(activeIndex)">Delete</button>
			</form>
		</template>
	</Modal>
</template>

<script>
	import DraggableDiv from "../components/DraggableDiv.vue";
	import Modal from "../components/Modal.vue";
	import { useClassStore } from "../stores/classStore.js";
	import { mapState, mapActions } from "pinia";

	// const store = useClassStore();
	export default {
		name: "SeatCheats",
		components: { DraggableDiv, Modal },
		computed: {
			...mapState(useClassStore, {
				allClasses: "classes",
			}),
		},
		created() {
			// this.$router.go();
			// this.activeIndex = this.$route.params;
			// console.log(typeof this.activeIndex);
			// console.log(isNaN(this.$route.params.id));
			this.classes = JSON.parse(JSON.stringify(this.allClasses));

			if (this.$route.params) {
				if (this.$route.params.id === "new") {
					this.classes.push({ name: "", students: [] });
					this.activeIndex = this.classes.length - 1;
					this.activeClass = this.classes[this.activeIndex];
				} else if (
					!isNaN(this.$route.params.id) &&
					this.$route.params.id >= 0 &&
					this.$route.params.id < this.classes.length
				) {
					this.activeIndex = parseInt(this.$route.params.id);
					this.activeClass = this.classes[this.$route.params.id];

					// console.log(this.activeClass.students);

					// filter out placeholder students...
					this.activeClass.students = this.activeClass.students.filter(
						(student) => student.position
					);
				}
			}

			if (!this.activeClass) {
				// no active class
				this.activeIndex = 0;
				this.activeClass = this.classes[0];
			}

			if (this.activeClass.name === "") {
				this.activeClass.name = "New Class";
				setTimeout(() => {
					this.newClassNameModalActive = true;
				}, 1000);
			}
		},

		methods: {
			...mapActions(useClassStore, ["updateClass"]),
			indexIsSelected(index) {
				return this.selected.includes(index);
			},
			generateJson() {
				console.log(JSON.stringify(this.activeClass));
			},
			saveClass() {
				this.updateClass(this.activeIndex, this.activeClass);
				// console.log(this.allClasses);
			},
			changeClass(e) {
				this.$router.push(`/${e.target.value}`);
			},
			addToSelected(studentIndex) {
				if (this.swapModeActive) {
					// if we clicked the same student twice
					if (this.selected.includes(studentIndex)) {
						this.selected = [];
					} else {
						// new student clicked
						this.selected.push(studentIndex);
					}

					// if 2 students have been clicked
					if (this.selected.length >= 2) {
						// swap 2 Elements;
						let index1 = this.selected[0];
						let index2 = this.selected[1];
						let arr = this.activeClass.students;
						[arr[index1], arr[index2]] = [arr[index2], arr[index1]];

						this.selected = []; // reset selected array

						this.saveStudentPositions(); // save class
					}
					// console.log(this.selected);
				}
			},
			toggleSwapMode() {
				this.swapModeActive = !this.swapModeActive;
				this.selected = []; // reset array for selected elements to swap
			},
			// checkIfSame() {
			// 	let divs = document.querySelectorAll(".canvas .draggable-div");
			// 	console.log(`Divs: ${divs.length}, Students: ${this.activeClass.students.length}`);
			// 	if (divs.length === this.activeClass.students.length) {
			// 		console.log("we got a match!");
			// 	}
			// },
			stopDragging(e, student) {
				// save positions
				student.position.top = e.target.parentNode.style.top;
				student.position.left = e.target.parentNode.style.left;
				// console.log(student);
			},
			saveStudentPositions() {
				let studentDivs = Array.from(document.querySelectorAll(".draggable-div"));

				for (let i = 0; i < this.activeClass.students.length; i++) {
					let student = this.activeClass.students[i];

					// add a "blank" element to keep arrays even length if we delete a student
					if (!student.position) {
						studentDivs.splice(i, 0, null);
					}

					let div = studentDivs[i];

					if (student.position && div) {
						// doesn't affect 'deleted' students
						student.position.top = div.style.top;
						student.position.left = div.style.left;
					}
				}

				this.saveClass();
			},
			setStudentIcon(iconText) {
				// console.log(this.editStudent);
				if (this.editStudent.icon === iconText) {
					this.editStudent.icon = "";
				} else {
					this.editStudent.icon = iconText;
				}
			},
			increaseFontSize() {
				const chart = document.querySelector(".canvas");
				console.log(chart.style.fontSize);
				chart.style.fontSize = "2em";
			},
			decreaseFontSize() {
				const chart = document.querySelector(".canvas");
				// chart.style.fontSize -= chart.style.fontSize * 0.5;
				chart.style.fontSize = "0.8em";
			},
			editStudentClicked(e, i) {
				e.preventDefault();
				// console.log(i);
				this.editStudent = JSON.parse(JSON.stringify(this.activeClass.students[i]));
				this.editStudent.index = `${i}`;
				this.editStudentModalActive = true;
			},
			closeEditModal() {
				this.editStudentModalActive = false;
				setTimeout(() => {
					this.editStudent = null;
				}, 1000);
			},
			openNewClassNameModal() {
				this.newClassNameModalActive = true;
			},
			closeNewClassNameModal() {
				this.newClassNameModalActive = false;
			},
			openSettingsModal() {
				this.settingsModalActive = true;
			},
			closeSettingsModal() {
				this.settingsModalActive = false;
			},
			openDeleteStudentModal() {
				this.deleteStudentModalActive = true;
			},
			closedeleteStudentModal() {
				this.deleteStudentModalActive = false;
			},
			openDeleteClassModal() {
				this.deleteClassModalActive = true;
				// console.log(this.deleteClassModalActive);
			},
			closedeleteClassModal() {
				this.deleteClassModalActive = false;
			},
			saveEditedName() {
				this.settingsModalActive = false;
				this.newClassNameModalActive = false;
				this.saveClass();
			},
			print() {
				window.print();
			},
			toggleLock(student) {
				student.locked = !student.locked;
				// console.log(student.locked);
			},
			addStudent() {
				if (this.newStudent) {
					this.activeClass.students.push({
						name: this.newStudent,
						icon: "",
						notes: "",
						locked: false,
						position: {
							// top: `${this.students.length * 20 + 110}px`,
							// left: `${this.students.length * 20}px`,
							top: "auto",
							left: "auto",
						},
					});
					this.saveClass();
					this.newStudent = "";
					// if (this.activeClass.students[this.activeClass.students.length - 1].position) {
					// 	console.log("fuck");
					// } else {
					// 	console.log("lflflf");
					// }
				}
			},
			deleteStudent(i) {
				// e.preventDefault();

				// let currLength = this.students.length;
				this.deleteStudentModalActive = false;
				this.editStudentModalActive = false;

				this.activeClass.students.splice(i, 1);
				this.activeClass.students.splice(i, 0, {
					locked: true,
					placeholder: true,
				});

				// filter out placeholder students...
				// this.activeClass.students = this.activeClass.students.filter(
				// 	(student) => student.position
				// );
				this.saveClass();
				setTimeout(() => {
					this.editStudent = null;
				}, 1000);
			},
			editClassStudent() {
				let i = this.editStudent.index;
				this.activeClass.students[i] = JSON.parse(JSON.stringify(this.editStudent));
				delete this.activeClass.students[i].index; // editStudent has an index, remove it
				this.closeEditModal();
			},
			shuffleArray(arr) {
				for (let i = arr.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[arr[i], arr[j]] = [arr[j], arr[i]];
				}
				return arr;
			},
			randomize() {
				let originalStudents = JSON.parse(JSON.stringify(this.activeClass.students));
				let locked = new Map();
				// console.log(originalStudents);
				// iterate backwards to avoid skipping... TODO:CHECK THIS
				for (let i = originalStudents.length - 1; i >= 0; i--) {
					if (originalStudents[i].locked) {
						locked.set(i, originalStudents.splice(i, 1));
					}
				}

				// console.log(originalStudents);
				this.shuffleArray(originalStudents);
				// console.log(originalStudents);

				//reverse map back to normal in order to forEach it
				const reversedLocked = [...locked].reverse();

				reversedLocked.forEach(([key, value]) => {
					originalStudents.splice(key, 0, value[0]);
				});

				this.activeClass.students = originalStudents;
				this.saveStudentPositions();
				// this.saveClass();
			},
			// addNotes(e, index) {
			// e.preventDefault();
			// console.log("Adding Note");
			// this.activeClass.students[index].notes = "Has a note";
			// },
			deleteClass(index) {
				this.allClasses.splice(index, 1);
				this.$router.push("/");
			},
		},
		data() {
			return {
				newClassNameModalActive: false,
				editStudentModalActive: false,
				settingsModalActive: false,
				deleteClassModalActive: false,
				deleteStudentModalActive: false,
				swapModeActive: false,
				editStudent: null,
				newStudent: "",
				activeClass: null,
				activeIndex: 0,
				classes: [],
				selected: [],
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body {
		background: white;
		background-image: radial-gradient(black 1px, transparent 0);
		background-size: 40px 40px;
		background-position: -19px -19px;
		/* font-size: 1.2rem; */
	}
	@page {
		size: landscape;
		margin: 0%;
	}

	@media print {
		.noprint {
			visibility: hidden;
		}
	}
	.selected-for-swap {
		opacity: 70%;
	}
	.icon-select {
		display: flex;
		flex-wrap: wrap;
	}
	.icon-select button {
		cursor: pointer;
		padding: 0.25rem;
		font-size: 1.1em;

		background: none;
		border-radius: 0.5em;
		min-width: 30px;
		border: none;
		/* background-color: #fff; */
	}

	.icon-select button:hover {
		background-color: #9eb8ff;
	}
	.icon-select button.student-icon--selected {
		background-color: #9eb8ff;
	}
	.modal-form-control {
		display: flex;
		flex-direction: column;
		text-align: left;
		font-size: 1.2em;
		margin-bottom: 1.5rem;
	}
	.modal-form-control label {
		font-size: 1.2em;
		margin-bottom: 0.25rem;
	}

	.modal-form-control input,
	.modal-form-control textarea {
		font-size: 1em;
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: 1px solid black;
		/* width: 100%; */
	}
	.modal-form-control textarea {
		font-size: 1em;
		resize: none;
		box-sizing: border-box;
		width: 100%;

		font-family: Arial, Helvetica, sans-serif;
	}

	.add-student-input input,
	.add-student-input button {
		font-size: 1.5rem;
	}
	h1 {
		margin: 0;
	}
	.student-name {
		font-size: 1.1em;
		/* font-weight: 800; */
		color: rgb(29, 29, 29);
	}
	.canvas {
		/* overflow: hidden; */
		/* background: #000; */
		/* width: 70%; */
		font-size: 1em;
	}
	.utility-btn {
		background: none;
		border: none;
		padding: 0.5rem;
		border-radius: 4px;
		cursor: pointer;
	}
	.utility-btn:hover {
		background-color: #fff;
	}
	.notes-icon {
		font-size: 1.2em;
		position: absolute;
		bottom: 0;
		right: 0;
		/* padding: 0.4rem; */
		cursor: pointer;

		opacity: 0;
		background: none;
		border: none;
		padding: 0.2rem;
	}
	.lock-icon {
		font-size: 1.2em;
		position: absolute;
		top: 0;
		right: 0;
		/* padding: 0.4rem; */
		cursor: pointer;

		opacity: 1;
		background: none;
		border: none;
		padding: 0.2rem;
	}
	.lock-icon--unlocked {
		opacity: 0;
	}

	.student-icon {
		color: black;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		font-size: 1.2em;
		position: absolute;
		bottom: 0;
		left: 0;
		/* font-weight: bold; */
		/* cursor: pointer; */
		opacity: 0.65;
		background: none;
		border: none;
		padding: 0.2rem;
	}

	.draggable-div p {
		font-size: 1.4em;
	}

	.draggable-div:hover .lock-icon--unlocked {
		opacity: 0.2;
	}

	.draggable-div:hover .lock-icon--unlocked:hover {
		opacity: 1;
	}
	.draggable-div:hover .notes-icon {
		opacity: 0.2;
	}

	.draggable-div:hover .notes-icon:hover {
		opacity: 1;
	}

	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		background-color: #437055;
	}

	.navbar > .navbar-item {
		flex: 1 1 0;
		display: flex;
		padding: 8px;
		color: white;
		/* justify-content: space-between; */
	}

	.home-link-container {
		font-size: 1.5em;
		justify-content: left;
	}
	.settings-container {
		font-size: 1.5em;
		justify-content: right;
	}
	.heading-container {
		justify-content: center;
	}
	.add-student-form {
		margin-bottom: 0.5rem;
	}
	.tools-container {
		display: flex;
		justify-content: center;
	}
	a {
		color: white;
		text-decoration: none;
	}
</style>
