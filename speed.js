/*5-> 1 point
Math.floor(1.3)
12 point -> suspended
*/

carSpeed(180);

function carSpeed(speed) {
    const speedLimit = 70;
    const kmPerPOint = 5;

    if(speed > speedLimit + kmPerPOint) {
        console.log("Ok");
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPOint);
    if(points >= 12) {
        console.log("License Suspended");
    } else {
        console.log("Points:", points);
    }
}


