import UserInfo from "./user-info.js";
import {displayUserStats} from "./utils.js";
renderPage();

function renderPage() {
    beginGame();
    addAUser();
}

let catOnePosition;
let catTwoPosition;
let score = 0;
let gameOver = false;
let gameTime = 60;


if(!addAUser()){
    gameOver = true
 
}else if (addAUser()){
    gameOver = false;
}

// if(!addAUser()) {
//     gameTime = 0;
// }


function beginGame() {
    
    for (let i = 0; i < 9; i++) {
        let hole = document.createElement("div");
        hole.id = i.toString();
        hole.addEventListener("click", selectHole)
        document.getElementById("game-board").appendChild(hole);
    }
    
    setInterval(moveCatOne, 1000);
    setInterval(moveCatTwo, 2000)



}



function randomHole(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function moveCatOne(){
    if(gameOver) {
        return
    }

    let catOne = document.querySelector("#catOne");

    let num = randomHole();
    if (catTwoPosition && catTwoPosition.id == num) {
        return
    } else if (catOnePosition && catOnePosition.id == num) {
        return
    }
    catOnePosition = document.getElementById(num)
    catOnePosition.appendChild(catOne);

    console.log(catOnePosition)
}

function moveCatTwo(){
    if(gameOver) {
        return
    }

    let catTwo = document.querySelector("#catTwo");

    let num = randomHole();
    if (catTwoPosition && catTwoPosition.id == num) {
        return
    } else if (catOnePosition && catOnePosition.id == num) {
        return
    }
    catTwoPosition = document.getElementById(num);
    catTwoPosition.appendChild(catTwo);
}

function selectHole() {
    if(gameOver) {
        return
    }
    if (this == catOnePosition) {
        score += 100;
        document.getElementById("score").innerText = score.toString();
    }  if (this == catTwoPosition) {
        score += 50;
        document.getElementById("score").innerText = score.toString();
    }
  
}

function addAUser() {

    const createUserButton = document.querySelector('#createUser_button');
    const userNameInput = document.querySelector('#userName');
    
    createUserButton.addEventListener('click', () => {
        const createUser = new UserInfo(userNameInput.value);
        const userDisplay = document.querySelector('#userDisplay');
        const userInfoPara = document.createElement('p');
        const userInfoSection = document.createElement('section');

        displayUserStats(userInfoPara, createUser);

        userInfoSection.appendChild(userInfoPara);
        userDisplay.appendChild(userInfoSection);

        if(!userNameInput){
            gameOver = true
        }if (userNameInput){
            gameOver = false;
        }

        console.log(userDisplay)

        userDisplay.innerHTML = "Welcome " + userNameInput.value + "!";
    });
}

function timer() {
    const timeRemaining = document.querySelector('#time-remaining');
    
    gameTime--
    timeRemaining.textContent = gameTime

    if (gameTime == 0) {
        clearInterval(gameTimerId);
        gameOver = true;
        alert("Game Over! Your Score is " + score + "!")    
    }
    
}

let gameTimerId = setInterval(timer, 1000)


