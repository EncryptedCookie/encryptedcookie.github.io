var levelOne={
    "level":`█ █ █ █ █ █ █ █ █
█ ▓ █ ░ ░ ░ ░ ▒ █
█ ░ █ ░ █ █ █ █ █
█ ░ █ ░ ░ ░ ░ ░ █
█ ░ █ █ █ █ █ ░ █
█ ░ █ ░ ░ ░ █ ░ █
█ ░ █ ░ █ ░ █ ░ █
█ ░ ░ ░ █ ░ ░ ░ █
█ █ █ █ █ █ █ █ █`.split(''),
    "playerIndex":20,
    "width":18
};

var levelTwo={
    "level":`█ █ █ █ █ █ █ █ █ █ █ █
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
`.split(''),
    "playerIndex":26,
    "width":24
};

var levelThree={
    "level":`█ █ █ █ █ █ █ █ █ █ █ █ █
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
`.split(''),
    "playerIndex":80,
    "width":26
};

var currentMaze={
    "level":"",
    "playerIndex":0,
    "width":0,
    "number":1
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

function move_player(direction) {
    if (direction === "up" && currentMaze.level[currentMaze.playerIndex-currentMaze.width]==="░") {
        currentMaze.level[currentMaze.playerIndex - currentMaze.width] = "▓";
        currentMaze.level[currentMaze.playerIndex] = "░";
        currentMaze.playerIndex -= currentMaze.width;
        return currentMaze.level.join('');
    }
    else if (direction === "up" && currentMaze.level[currentMaze.playerIndex-currentMaze.width]==="▒") {
        if (get_goal() ===  true) {
            currentMaze.level[currentMaze.playerIndex - currentMaze.width] = "▓";
            currentMaze.level[currentMaze.playerIndex] = "░";
            currentMaze.playerIndex=0;
            return currentMaze.level.join('');
        }
    }
    if (direction === "down" && currentMaze.level[currentMaze.playerIndex+currentMaze.width]==="░") {
        currentMaze.level[currentMaze.playerIndex+currentMaze.width]="▓";
        currentMaze.level[currentMaze.playerIndex]="░";
        currentMaze.playerIndex += currentMaze.width;

    }
    else if (direction === "down" && currentMaze.level[currentMaze.playerIndex+currentMaze.width]==="▒") {
        if (get_goal() ===  true) {
            currentMaze.level[currentMaze.playerIndex+currentMaze.width]="▓";
            currentMaze.level[currentMaze.playerIndex]="░";
            currentMaze.playerIndex=0;
            return currentMaze.level.join('');
        }
    }
    if (direction === "left" && currentMaze.level[currentMaze.playerIndex-2]==="░") {
        currentMaze.level[currentMaze.playerIndex-2]="▓";
        currentMaze.level[currentMaze.playerIndex]="░";
        currentMaze.playerIndex -= 2;
        return currentMaze.level.join('');
    }
    else if (direction === "left" && currentMaze.level[currentMaze.playerIndex-2]==="▒") {
        if (get_goal() ===  true) {
            currentMaze.level[currentMaze.playerIndex-2]="▓";
            currentMaze.level[currentMaze.playerIndex]="░";
            currentMaze.playerIndex=0;
            return currentMaze.level.join('');
        }
    }
    if (direction === "right" && currentMaze.level[currentMaze.playerIndex+2]==="░") {
        currentMaze.level[currentMaze.playerIndex+2]="▓";
        currentMaze.level[currentMaze.playerIndex]="░";
        currentMaze.playerIndex += 2;
        return currentMaze.level.join('');
    }
    else if (direction === "right" && currentMaze.level[currentMaze.playerIndex+2]==="▒") {
        if (get_goal() ===  true) {
            currentMaze.level[currentMaze.playerIndex+2]="▓";
            currentMaze.level[currentMaze.playerIndex]="░";
            currentMaze.playerIndex=0;
            return currentMaze.level.join('');
        }
    }
}