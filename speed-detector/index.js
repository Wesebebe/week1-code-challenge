//prompt user for input and store in variable 
const speed = prompt("Speed: ")
//declare function checkSpeed
function checkSpeed(speed){
    if(speed < 70){ //set conditionals
        console.log("Ok");
    }else if(speed > 70){
        points = 0;
        for(i = 0; i>70 ; i += 5){
            if(points >= 12){
                points += 1
                console.log("License suspended")
            }
        }
        return speed;
    }
}