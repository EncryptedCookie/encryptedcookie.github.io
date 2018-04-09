var levelOne={
    "level":[`█ █ █ █ █ █ █ █ █
█ ▓ █ ░ ░ ░ ░ ▒ █
█ ░ █ ░ █ █ █ █ █
█ ░ █ ░ ░ ░ ░ ░ █
█ ░ █ █ █ █ █ ░ █
█ ░ █ ░ ░ ░ █ ░ █
█ ░ █ ░ █ ░ █ ░ █
█ ░ ░ ░ █ ░ ░ ░ █
█ █ █ █ █ █ █ █ █`.split()],
    "playerIndex":[40],
    "width":[36]
};

var levelTwo={
    "level":[`█ █ █ █ █ █ █ █ █ █ █ █
█ ▓ ░ ░ ░ ░ █ ░ ░ ░ ░ █
█ █ █ █ █ ░ █ ░ █ █ ░ █
█ ░ ░ ░ ░ ░ █ █ █ ░ ░ █
█ ░ █ █ █ ░ █ ░ ░ ░ ░ █
█ ░ ░ █ ░ ░ █ ░ █ █ ░ █
█ █ ░ █ ░ █ █ ▒ █ ░ ░ █
█ ░ ░ █ ░ ░ █ █ █ ░ █ █
█ ░ █ █ █ █ █ ░ █ ░ ░ █
█ ░ ░ ░ █ ░ ░ ░ █ █ ░ █
█ ░ █ ░ ░ ░ █ ░ ░ ░ ░ █
█ █ █ █ █ █ █ █ █ █ █ █
`.split("")],
    "playerIndex":[52],
    "width":[48]
};

var levelThree={
    "level":[`█ █ █ █ █ █ █ █ █ █ █ █ █
█ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ █
█ ░ █ █ █ █ █ █ █ █ █ ░ █
█ ▓ █ ░ ░ ░ ░ ░ ░ ░ █ ░ █
█ █ █ ░ █ █ ░ █ █ █ █ ░ █
█ ░ ░ ░ █ ░ ░ ░ █ ░ █ ░ █
█ ░ █ ░ █ ░ ▒ ░ █ ░ ░ ░ █
█ ░ █ ░ █ ░ ░ ░ █ ░ █ ░ █
█ ░ █ ░ █ █ █ █ █ ░ █ ░ █
█ ░ █ ░ ░ █ ░ ░ ░ ░ █ ░ █
█ ░ █ █ █ █ ░ █ █ █ █ ░ █
█ ░ ░ ░ ░ ░ ░ ░ ░ █ ░ ░ █
█ █ █ █ █ █ █ █ █ █ █ █ █
`.split("")],
    "playerIndex":[160],
    "width":[52]
};

var currentMaze={
    "level":[""],
    "playerIndex":[0],
    "width":[0],
    "number":[1]
};

function import_Maze(mazeNumber) {
    switch (mazeNumber) {
        case 1:
            currentMaze.level = levelOne.level;
            currentMaze.playerIndex = levelOne.playerIndex;
            currentMaze.width = levelOne.width;
            break;
        case 2:
            currentMaze.level = levelTwo.level;
            currentMaze.playerIndex = levelTwo.playerIndex;
            currentMaze.width = levelTwo.width;
            break;
        case 3:
            currentMaze.level = levelThree.level;
            currentMaze.playerIndex = levelThree.playerIndex;
            currentMaze.width = levelThree.width;
            break;
    }
}

function get_goal() {
    if (currentMaze.number !== 3) {
        currentMaze.number += 1;
        import_Maze(currentMaze.number);
    }
    else if (currentMaze.number === 3) {
        console.log("You win!") //       /!\ Change this later to add "You win!" to the page itself and stops the script //
    }
}

function move_player(direction) {
    /*if (direction === "up" && currentMaze.level.slice(currentMaze.playerIndex-currentMaze.width, currentMaze.playerIndex-currentMaze.width+1)===["░"]) {
        currentMaze.level.slice(currentMaze.playerIndex-currentMaze.width, currentMaze.playerIndex-currentMaze.width+1)=["▓"];
        currentMaze.level.slice(currentMaze.playerIndex, currentMaze.playerIndex+1)=["░"];
    else*/ if (direction === "down" && currentMaze.level.slice(currentMaze.playerIndex+currentMaze.width, currentMaze.playerIndex+currentMaze.width+1)===["░"]) {
        currentMaze.level.slice(currentMaze.playerIndex+currentMaze.width, currentMaze.playerIndex+currentMaze.width+1)=["▓"];
        currentMaze.level.slice(currentMaze.playerIndex, currentMaze.playerIndex+1)=["░"];
    }
}