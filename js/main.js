console.log("connected");

//Variables
const button = document.querySelector("#btn");
const hamburgerCon = document.querySelector("#burger-con");
const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll(".lb_links");
const content = document.querySelector("#lightbox article");

let flavours = [
    { 
        brand: "QUATRO",
        name: "Original Orange Juice Flavour",
        info: "Pulp Free",
        subheading: "The Benefits",
        benefit1: "Vitamin C",
        benefit2: "Potassium", 
        benefit3: "No Artificial Flavours"
    },
    {
        brand: "QUATRO",
        name: "Original Grapefruit Juice Flavour",
        info: "Pulp Free",
        subheading: "The Benefits",
        benefit1: "Boosts Immunity",
        benefit2: "Low in Calories", 
        benefit3: "No Artificial Flavours"
    },
    {
        brand: "QUATRO",
        name: "Original Passionfruit Juice Flavour",
        info: "Supported by Local Farmers",
        subheading: "The Benefits",
        benefit1: "Aids Digestion",
        benefit2: "High in Potassium", 
        benefit3: "No Artificial Flavours"
    },
    {
        brand: "QUATRO",
        name: "Original Pineapple Juice Flavour",
        info: "Always Fresh and Ripe",
        subheading: "The Benefits",
        benefit1: "Helps Reduce Pain and Swelling",
        benefit2: "Digestion Aid", 
        benefit3: "No Artificial Flavours"
    }
];

//Functions
function burgerMenu() {
    hamburgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

function fillContent() {
    console.log(flavours[this.dataset.drinkIndex].brand);
    console.log(flavours[this.dataset.drinkIndex].name);
    console.log(flavours[this.dataset.drinkIndex].info);
    console.log(flavours[this.dataset.drinkIndex].subheading);
    console.log(flavours[this.dataset.drinkIndex].benefit1);
    console.log(flavours[this.dataset.drinkIndex].benefit2);
    console.log(flavours[this.dataset.drinkIndex].benefit3);

    lightBox.classList.add(`lightbox${this.dataset.drinkIndex}`);
    content.innerHTML = "";

    let brandName = document.createElement("h2");
    brandName.textContent = flavours[this.dataset.drinkIndex].brand;
    brandName.classList = "lb_heading";
    content.appendChild(brandName);

    let flavourName = document.createElement("h3");
    flavourName.textContent = flavours[this.dataset.drinkIndex].name;
    flavourName.classList = "lb_subheader";
    content.appendChild(flavourName);

    let drinkInfo = document.createElement("h3");
    drinkInfo.textContent = flavours[this.dataset.drinkIndex].info;
    drinkInfo.classList = "lb_subheader2";
    content.appendChild(drinkInfo);

    let subHeading = document.createElement("h3");
    subHeading.textContent = flavours[this.dataset.drinkIndex].subheading;
    subHeading.classList = "lb_subheader3";
    content.appendChild(subHeading);

    let benefitOne = document.createElement("p");
    benefitOne.textContent = flavours[this.dataset.drinkIndex].benefit1;
    benefitOne.classList = "lb_text";
    content.appendChild(benefitOne);

    let benefitTwo = document.createElement("p");
    benefitTwo.textContent = flavours[this.dataset.drinkIndex].benefit2;
    benefitTwo.classList = "lb_text";
    content.appendChild(benefitTwo);

    let benefitThree = document.createElement("p");
    benefitThree.textContent = flavours[this.dataset.drinkIndex].benefit3;
    benefitThree.classList = "lb_text";
    content.appendChild(benefitThree);

}

//Eventlisteners
button.addEventListener("click", burgerMenu);
links.forEach(link => link.addEventListener("click", fillContent));

