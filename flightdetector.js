
var dailyFlights = [];
function pushFlight() {
	for(i=0; i < 3; i++) {
		function flightDetails(airline, time, destination){
			this.airline = airline;
			this.time = time;
			this.destination = destination;s
		}
		var airlinePrompt = prompt("Enter airline");
		var timePrompt = prompt("Enter departure time");
		var arrivalCityPrompt = prompt("Enter arrival city");
		dailyFlights.push(new flightDetails(airlinePrompt, timePrompt, arrivalCityPrompt));
	}
}
pushFlight();
console.log(dailyFlights);