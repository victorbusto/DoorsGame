/* Door Images global variables */

var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');

/* Door Paths global variables */

var botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
var botBeachPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
var botSpacePath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
var closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

/* Game's Logic global variables */

var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var startButton = document.getElementById('start');


/* Game's Logic Functions */
/* function that decreases the number of closes doors when on of them is opened 
*  and checks if the number of doors is 0 (win)
*/
const playDoor = () => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You Win! Play again?';
  }
}


const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor((Math.random()* 3));
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = botBeachPath;
    openDoor3 = botSpacePath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = botSpacePath;
    openDoor3 = botBeachPath;
  } else {
    openDoor1 = botBeachPath;
    openDoor2 = botSpacePath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  if(isClicked(doorImage1)) {
    playDoor();
  }
}
doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
  if(isClicked(doorImage2)) {
    playDoor();
  }
}
doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  if(isClicked(doorImage3)) {
    playDoor();
  }
}


randomChoreDoorGenerator();

