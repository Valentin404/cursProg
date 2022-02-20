"use strict";

// const btns = document.getElementsByTagName("button");
// const wrapper = document.getElementsByClassName("btns-wrapper")[0];
// const body = document.body;

// Array.from(btns).forEach((btn) => {
// 	btn.addEventListener("click", (e) => {
// 		console.log("Click on " + e.target.textContent + " button");
// 	});
// });

// body.addEventListener(
// 	"click",
// 	(e) => {
// 		console.log("Click on body true");
// 	},
// 	true
// );
// wrapper.addEventListener(
// 	"click",
// 	(eventObject) => {
// 		console.log("Click on wrapper true");
// 		console.log("Click on " + eventObject.target.textContent + " button");
// 		eventObject.stopPropagation();
// 	},
// 	true
// );
// body.addEventListener(
// 	"click",
// 	(e) => {
// 		console.log("Click on body false");
// 	},
// 	false
// );
// wrapper.addEventListener(
// 	"click",
// 	(e) => {
// 		console.log("Click on wrapper false");
// 	},
// 	false
// );



// Все добавить в HTML елементы, поставить дисплей нан, а классу актив флех


// TASK 1
let menu = document.getElementById("menu");
menu.addEventListener("click", (el) => {
	// console.log(el.target);
	if (el.target.tagName === "A") { 

		el.preventDefault();   
		let list = el.target.closest("li");
		let activeItem = document.getElementsByClassName("active")[0]; 
		if (activeItem) {
			activeItem.classList.remove("active"); 
		}
		
		list.classList.add("active"); 
	}
	
});

//TASK 2

const ul = document.getElementById("messages");

ul.addEventListener("click", function (e) {
	if (e.target.closest("button").classList.contains("close-btn")) {

		e.target.closest(".pane").remove(); 
	}
});


