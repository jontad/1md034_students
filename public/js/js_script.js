

function menuItem(name, kCal, info1, info2, allergy, imagePath) {
    this.name = name;
    this.kCal = kCal;
    this.info1 = info1;
    this.info2 = info2;
    this.allergy=allergy;
    this.imagePath = imagePath;
}


function nameAndKcal(menuItem) {
    return "Name: " + menuItem.name + "\nCalories: " + menuItem.kCal + " kCal"; 
}

let fireBurger = new menuItem("The Fire Burger", "790 kCal", "Cheeseburger tomato and habanero peppers", "Served with fries and a drink", "Contains gluten and lactose", "https://www.burgerdudes.se/wp-content/uploads/2015/02/shackburger_shakeshack_ny_till_rec.jpg");
let beautBurger = new menuItem("The Beaut", "600 kCal", "Topped with pepper jack cheese and bacon", "Can be served gluten-free", "Contains gluten and lactose", "https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg");
let seaFoodBurger = new menuItem("The Seafood Special", "900 kCal", "Can be served Double or Simple", "Fishburger topped with in-house mayo", "Mayo contains nuts", "https://www.max.se/contentassets/ff1439a7a1624cf4a6b068c37d0db25f/product_crispy-no-chicken2.jpg");
let mcBurger = new menuItem("McTastic", "300 kCal", "Big Mac but not", "Served with fries", "Contains gluten","https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg");
/*let jtBurger = new menuItem("The JT", "1000 kCal", "Signature burger", "Served with coke and fries", "Contains Gluten", "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg");
*/
let menu = [fireBurger, beautBurger, seaFoodBurger, mcBurger];
/*
var burg = document.getElementsByClassName("burgers");
for(let i = 0; i < 5; i++){
    let burger = menu[i];
    
    let node = document.createElement("p");
    let name = document.createTextNode(burger.name);
    node.appendChild(name);
    
    if(burger.gluten){
	let gluten = document.createTextNode(', ' + burger.gluten);
	node.appendChild(gluten);
    }
    if(burger.lactose){
   	let lactose = document.createTextNode(', ' + burger.lactose);
	node.appendChild(lactose);
    }
  //  burg.appendChild(node);
}
*/

let burger = document.getElementsByClassName("column");
for (i = 0; i < burger.length; i++) {
    //Name
    let elem = document.createElement('h3');
    let name = document.createTextNode(menu[i].name);
    elem.appendChild(name);

    burger[i].appendChild(elem);

    //img
    let img = document.createElement('img');
    img.src = menu[i].imagePath;
    img.width = 300;
    img.height = 200;
    
    burger[i].appendChild(img);

    //desc
    let list = document.createElement('ul');

    let point1 = document.createElement('li');
    let point2 = document.createElement('li');
    let point3 = document.createElement('li');
    let point4 = document.createElement('li');

    let kCal = document.createTextNode(menu[i].kCal);
    let info1 = document.createTextNode(menu[i].info1);    
    let info2 = document.createTextNode(menu[i].info2);
    let allergy = document.createTextNode(menu[i].allergy);

    point1.appendChild(kCal);
    point2.appendChild(info1);
    point3.appendChild(info2);
    point4.appendChild(allergy);
    
    list.appendChild(point1);
    list.appendChild(point2);
    list.appendChild(point3);
    list.appendChild(point4);
    
    burger[i].appendChild(list);
}


console.log(burger[1]);



