/*
const vm = new Vue({
  el: '#myID',
  data: {
  arbitraryVariableName: 'Välj en burgare' + new Date()
  }
})


const vm = new Vue({
  el: '#myID',
  data: {
    b1: fireBurger.name,
    b2: beautBurger.name,
    b3: seaFoodBurger.name,
    b4: mcBurger.name,
    b5: jtBurger.name,
  }
})*/

const vm = new Vue({
  el: '#vue',
    data: {
	food:food,
	burgers: []
    },
})



const input = new Vue({
  el: '#whole_form',
  data: {
      name: "",
      email: "",
      street: "",
      house: "",
      pay: "",
      gender: "",
      output: ""
  },
    methods: {
	inputDone: function(){
	    this.output = 'Name: ' + this.name + ' Email: ' + this.email
		+ ' Street: ' + this.street + ' Housenumber: ' + this.house
		+ ' Payment By: ' + this.pay + ' Gender: ' + this.gender
		+  ' Your Order: ' + vm.burgers
	}
  }
})




