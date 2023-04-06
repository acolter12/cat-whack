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
   gameOver = true;
}else if (addAUser()){
    gameOver = false;
}




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
            clearInterval(gameTimerId)
        }if (userNameInput){
            gameOver = false;
        }

        console.log(userDisplay)

        userDisplay.innerHTML = "Welcome " + userNameInput.value + "!";
        
        let startGame = document.getElementById("user-page");
        let gamePage = document.getElementById("game-page");
        let gameOverScreen = document.getElementById("game-over");
        startGame.style.display = "none";
        gamePage.style.display = "block";
        gameOverScreen.style.display = "none";
        clearInterval(gameTimerId)
        gameTimerId = setInterval(timer, 1000);
        
    });
}

var gameTimerId;

function timer() {
    const timeRemaining = document.querySelector('#time-remaining');
    // const gameOverScreen = document.querySelector('#game-over');
    gameTime--;
    timeRemaining.textContent = gameTime



    if (gameTime == 0) {
        clearInterval(gameTimerId);
        gameOver = true;
        gameOverScreen();
       // alert("Game Over! Your Score is " + score + "!")  
        // gameOverScreen.classList.toggle('#game-over');  
    }

    console.log(timer)

}



function gameOverScreen(){
    let startGame = document.getElementById("user-page");
    let gamePage = document.getElementById("game-page");
    let gameOverScreen = document.getElementById("game-over");
    startGame.style.display = "none";
    gamePage.style.display = "none";
    gameOverScreen.style.display = "block";

    
}
