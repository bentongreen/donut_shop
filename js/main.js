'use strict'

//constructor
var DonutShop = function(location, minCustHr, maxCustHr, avgSalesHr){
	this.location = location;
	this.minCustHr = minCustHr;
	this.maxCustHr = maxCustHr;
	this.avgSalesHr = avgSalesHr;
};


DonutShop.prototype.randomGenerator = function(){
	return (Math.floor((Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr)));
};

DonutShop.prototype.salesCalculator = function(){
	this.salesHourly = [];
	this.salesDaily = 0;

	for(var x = 0; x < 11; x++){
		this.salesHourly[x] =  Math.floor(this.randomGenerator() * this.avgSalesHr);
		this.salesDaily += this.salesHourly[x];
	};
};

//code adopted from demonstration and code review in this mornings class 8/11
DonutShop.prototype.render = function(){
	var shopsTable = document.getElementById('shop-table');
	var newTR = document.createElement('tr');
	newTR.id = this.location;
	newTR.innerHTML = this.location;
	shopsTable.appendChild(newTR);
	this.salesCalculator();

		for (var y = 0; y < 11; y++){
			var newTD = document.createElement('td');
			newTD.innerHTML = this.salesHourly[y];
			newTR.appendChild(newTD);
		};

			var newTD = document.createElement('td');
			newTD.innerHTML = this.salesDaily;
			newTR.appendChild(newTD);
};

var addAllTheThings = function(){

	var shopsTable = document.getElementById('shop-table');

		var tableHead = ['Donut Shop', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', 'Total'];
		var tableHeadRow = document.createElement('tr');
		shopsTable.appendChild(tableHeadRow);

			for (var z = 0; z < 13; z++){
				var headTD = document.createElement('td');
				headTD.innerHTML = tableHead[z];
				tableHeadRow.appendChild(headTD);
			};

				for(var k = 0; k < shopsArray.length; k++){
					shopsArray[k].render();
				}

};

//saves the information from new donut shop made from form information and adds it to Donut Shops table
var saveSubmisson = function(){
	var inputLocation = document.getElementById('inputLocation').value;
	var inputMin = document.getElementById('inputMin').value;
	var inputMax = document.getElementById('inputMax').value;
	var inputAvg = document.getElementById('inputAvg').value;

	var newShop = newDonutShop(inputLocation, inputMin, inputMax, inputAvg);

	shopsArray.push(newShop);
	newShop.render();

		for( var v = 0; v < shopsArray.length-1; v++){
			if(newShop.location === shopsArray[v].location){
				shopsArray[v] = newShop;
				addAllTheThings();
			}
		}
};

//new Donut Shop based on information in submitted form from html page
var newDonutShop = function(inputLocation, inputMin, inputMax, inputAvg){
	var submittedDonutShop = new DonutShop(inputLocation, inputMin, inputMax, inputAvg);
	return submittedDonutShop;
};

var newShopForm = document.getElementById('submitButton');
newShopForm.addEventListener('click', saveSubmisson);
var downTown = new DonutShop('Downtown', 8, 43, 4.5);
var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2);
var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
var ballard = new DonutShop('Ballard', 8, 58, 3.75);
var shopsArray = [downTown, capitolHill, southLakeUnion, wedgewood, ballard];
addAllTheThings();