/*
const burgers = new Vue({
    el: '#vue',
    data: {
	food:food,
	burgers: []
    },
})
*/

'use strict';
const socket = io();
const vm = new Vue({
    el: 'main',
    data: {
	food:food,
	burgers: [],

	name: "",
	email: "",
	pay: "",
	gender: "",
	output: "",

	status: false,
	orders: {},
	order: {
	    details: {x: 0, y: 0},
	},
	amount: 1,
    },
    methods: {
	inputDone: function(){
	    this.output = 'Name: ' + this.name + ' Email: ' + this.email
		+ ' Payment By: ' + this.pay + ' Gender: ' + this.gender
		+  ' Your Order: ' + this.burgers
	},
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	   /* let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;*/
	    return this.amount++;
	},
	addOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    this.status = true;
	    
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: this.order.details.x,
		    y: this.order.details.y,
		},
		orderItems: this.burgers,
		personalInfo: [this.name, this.email, this.pay, this.gender]
	    });
	},
	displayOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.order.details.x = event.clientX - 10 - offset.x;
	    this.order.details.y = event.clientY - 10 - offset.y;

	    orderItems: this.burgers
	}
    }
});






