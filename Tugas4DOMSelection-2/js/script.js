// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "25px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "gold";

// document.querySelectorAll()
const p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = "cyan";
}


// Mengubah Node Root
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "gold";