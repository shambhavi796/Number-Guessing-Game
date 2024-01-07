const max=prompt('enter the max range to guess no.');
const num= Math.floor(Math.random()*max)+1;
let guess=prompt('make your guess');
while (true){;
    if (guess=='quit'){
        alert(`Player quits, the number was ${num}`);
        break;
    }
    if (guess==num){
        alert(`CONGRATS! you guessed it right, the number was ${num}`);
        break;
    }else if(guess<num){
        guess=prompt('hint: ur guess was small. Please try again');

    }else{
        guess=prompt('hint: ur guess was large. Please try again');
    }
}

