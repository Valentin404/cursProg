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

		el.preventDefault();   // Отключает привычные  действия елементов

		// el.target.setAttribute("href", "google");  // дописывает новый хреф, но что бі добавить, нужно preventDefault(); отключить их

		// console.log(el.target.href);
// От сюда
		let list = el.target.closest("li"); //возвращает ближайший родительский элемент (или сам элемент)
		let activeItem = document.getElementsByClassName("active")[0]; // если такой класс существует, то возвращает этот елемент

		if (activeItem) {
			activeItem.classList.remove("active");  // У (прошлого) елемента удаляет этот класс 
		}
		
		list.classList.add("active"); // Добавляет этот класс
	}
	// до сюда
});

//TASK 2

const ul = document.getElementById("messages");

ul.addEventListener("click", function (e) {
	if (e.target.closest("button").classList.contains("close-btn")) {
		// e.target.closest(".pane").style.display = "none";
		// console.log(e.target.closest("button")); // возвращает саму кнопку
		// console.log(e.target.classList.contains("close-btn")); // Возвращает тру, если класс совпал
		// console.log(e.target.closest("button").classList.contains("close-btn"));  // возвращает тру, если у кнопки (возвращаемого елемента) есть класс "close-btn" 
		// так как сверху не пишут, если такого класса нет, возвращает ошибку
		e.target.closest(".pane").remove();  // Удаляет елемент  таким класом
	}
});


