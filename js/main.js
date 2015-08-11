'use strict'

//declare variables

var locationName;
var avgMin;
var avgMax;
var avgNutsPer;
var sumTotal;


//constructor
var DonutShop = function(locationName, avgMin, avgMax, avgNutsPer){
	this.locationName = locationName;
	this.avgMin = avgMin;
	this.avgMax = avgMax;
	this.avgNutsPer = avgNutsPer;
}

DonutShop.prototype.randNumCustomers = function(avgMin, avgMax){
	return Math.floor(Math.random() * (this.avgMax - this.avgMin + 1)) + this.avgMin;
}

DonutShop.prototype.calcSales = function(){
	//code to calculate sales in an hour here
	var randomizedSales = this.randNumCustomers(this.avgMin, this.avgMax);
	return this.avgNutsPer * randomizedSales;
}

DonutShop.prototype.sumTotals = function(){
	//code to calculate total sum sales will go here, haven't really fleshed that out yet.
	var sumTotal = sumTotal + this.calcSales();
	return sumTotal; 
}

DonutShop.prototype.addExistingShops = function(){
	//code to add pre existing shops to table
	var shopTable = document.getElementById('shop-table');
	var newTR = document.createElement('tr');
	var addTR = shopTable.appendChild(newTR);
	var newTD = document.createElement('td');
	var addTD = newTR.appendChild(newTD);
}

DonutShop.prototype.receiveLocationForm = function(){
	//code for a method to receive data from the input form
}

DonutShop.prototype.addNewShops = function(){
	//code to add new shop based on info processed in receiveLocationForm method
}



//instances
var downTown = new DonutShop("Downtown", 8, 43, 4.50);
var capitolHill = new DonutShop("Capital Hill", 4, 37, 2.00);
var southLakeUnion = new DonutShop("South Lake Union", 9, 23, 6.33);
var Wedgewood = new DonutShop("Wedgewood", 2, 28, 1.25);
var Ballard = new DonutShop("Ballard", 8, 58, 3.75);


//DOM access

downTown.addExistingShops();
