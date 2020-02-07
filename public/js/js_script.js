/*
function nameAndKcal(menuItem) {
    return "Name: " + menuItem.name + "\nCalories: " + menuItem.kCal + " kCal"; 
}


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
*/

/*
function click() { 
    console.log("Button Clicked!");
} 

let button = document.getElementById("button"); 
button.addEventListener("click", click);


button.addEventListener("click", inputReader);
function inputReader(){
    
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let number = document.getElementById("housenumber").value;

    let drop = document.getElementById("drop").value;
      
    var gender; 
    let radio = document.getElementsByName("gender");
    for(let i = 0; i < radio.length; i++){
	if(radio[i].checked){
	    gender = radio[i].value;
	    break;
	}
    }
    let input = [name, email, street, number, drop, gender];
    console.log(input);
}
*/
