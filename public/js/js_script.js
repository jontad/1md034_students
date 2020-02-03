
function menuItem(name, kCal, gluten, lactose, imagePath) {
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imagePath = imagePath;
}

function nameAndKcal(menuItem) {
    return "Name: " + menuItem.name + "\nCalories: " + menuItem.kCal + " kCal"; 
}

let fireBurger = new menuItem("The Fire Burger", 790, true, true);
let beautBurger = new menuItem("The Beaut", 600, true, true);
let seaFoodBurger = new menuItem("The Seafood Special", 900, false, false);

let mcBurger = new menuItem("McTastic", 300, true, false);
let jtBurger = new menuItem("The JT", 1000, false, true);

let menu = [fireBurger, beautBurger, seaFoodBurger, mcBurger, jtBurger];

let burgerID = ["b1", "b2", "b3", "b4", "b5"];
for(let i = 0; i < burgerID.length; i++){
    let burger = menu[i];
    let burgerName = burger.name + " |"
    let burgerNo = burgerID[i];

    if(burger.gluten){
  	burgerName = burgerName + "\nContains Gluten"
    }
    if(burger.lactose){
	burgerName = burgerName + "\n Contains Lactose"
    }
    document.getElementById(burgerNo).innerHTML = burgerName
}


console.log(nameAndKcal(jtBurger));
