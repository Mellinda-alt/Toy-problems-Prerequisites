
function carSpeed(limit) {

const speed = 80;

const points = Math.floor((speed - 70) / 5);

if (speed < 75) {
    console.log("Ok");
} else if(points < 12) {
    console.log(`points: ${points}`);
} else {
    console.log(`License suspended by ${points} points`);
}

const demeritPoints = points;
console.log(`points: ${demeritPoints}`);

}

const driverSpeed = parseInt("Enter driver's speed (km/h): ");

carSpeed(driverSpeed);



