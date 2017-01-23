var Car = (function () {
    function Car() {
    }
    return Car;
}());
;
var myCar = new Car();
myCar.year = 2001;
myCar.make = "Honda";
myCar.model = "Civic";
var dreamCar = new Car();
dreamCar.year = 2016;
dreamCar.make = "Morgan";
dreamCar.model = "Aero SuperSports";
myCar.year = 2012;
//done myCar year changed, see...
function printCarDetails(car) {
    console.log("This car is a " + car.year + " " + car.make + " " + car.model);
}
//now you can...
printCarDetails(myCar);
//and...
printCarDetails(dreamCar);
//tada!!!
