var oldCar = {
    name: 'sivic',
    year: 2000,
    color: 'green',
    broken: false,
};
var printVehicle = function (vehicle) {
    console.log(vehicle.name, vehicle.year, vehicle.broken);
};
printVehicle(oldCar);
