console.log("connected");

//Variables
const button = document.querySelector("#btn");
const hamburgerCon = document.querySelector("#burger-con");

//Functions
function burgerMenu() {
    hamburgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

//Eventlisteners
button.addEventListener("click", burgerMenu);