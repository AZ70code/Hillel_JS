"use strict";

const formEl = document.querySelector(".todo-form");

const nameEl = document.querySelector('[name="name"]');
const ownerEl = document.querySelector('[name="owner"]');
const statusEl = document.querySelector('[name="status"]');

const tableEl = document.querySelector(".todo-table");
const tableBodyEl = tableEl.querySelector("tbody");
let task = 0;
let tableFoot;

// FORM LISTENERS
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const name = nameEl.value;
	const owner = ownerEl.value;
	const status = statusEl.value;

	const nameFieldIsValid = validateField(nameEl, /^[a-zA-Z]/);
	const ownerFieldIsValid = validateField(
		ownerEl,
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	);
	const statusFieldIsValid = validateField(statusEl, /^[a-zA-Z]/);

	if (nameFieldIsValid && ownerFieldIsValid && statusFieldIsValid) {
		appendToTable({
			name,
			owner,
			status,
		});
//=== Homework =================
		task = task + 1;
		if(task == 1) {
			tableFoot=document.createElement("tfoot");
			tableBodyEl.after(tableFoot);
		}
	}
	clearForm();
	taskCounter(task, tableFoot);
// ========================================		
});

formEl.addEventListener("reset", (e) => {
	e.preventDefault();
});
//=== Homework - task1 =================
function clearForm() {
	nameEl.value = '';
	ownerEl.value = '';
	statusEl.value = '';
}
//===================================
function isEmpty(value) {
	return value.trim().length === 0;
}

function validateField(el, regex) {
	const value = el.value;
	const result = regex.test(value);
	if (!result) {
		el.classList.add("error");
	} else {
		el.classList.remove("error");
	}
	return result;
}

nameEl.addEventListener("change", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

nameEl.addEventListener("blur", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

ownerEl.addEventListener("change", (e) => {
	validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

ownerEl.addEventListener("blur", (e) => {
	validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

statusEl.addEventListener("blur", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

// TABLE
let trEl;
function createTableItem(obj) {
	trEl = document.createElement("tr");
	Object.entries(obj).forEach(([key, value]) => {
		const tdEl = document.createElement("td");
		tdEl.innerText = value;
		trEl.appendChild(tdEl);
	});
	const removeButtonEl = createRemoveButton();
	trEl.appendChild(removeButtonEl);

	return trEl;
}

function appendToTable(obj) {
	tableBodyEl.append(createTableItem(obj));
}

function createRemoveButton() {
	let tdEl = document.createElement("td");
	const buttonEl = document.createElement("button");
	buttonEl.innerText = "Remove";
	tdEl.appendChild(buttonEl);

	function handleClickRemoveButton(e) {
		buttonEl.removeEventListener("click", handleClickRemoveButton);
//=== Homework - task2 =================
		e.target.parentNode.parentNode.innerHTML = '';
//=== Homework - task3 =================
		task = task - 1;
		if(task == 0) {
			tableFoot.remove();
		}
		taskCounter(task, tableFoot);
// =============================================
	}
	buttonEl.addEventListener("click", handleClickRemoveButton);
	return tdEl;
}
//=== Homework - task3 =================

function taskCounter(n, row) {
	let count={};
	let key = 'Completed tasks';
	count[key] = n;
	row.innerText = key +':' +`${n}`;
}

