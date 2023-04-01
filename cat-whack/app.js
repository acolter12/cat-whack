renderPage();

function renderPage() {
    beginGame();
    
}

let catOnePosition;
let catTwoPosition;
let score = 0;
let gameOver = false;

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
    if (catOnePosition) {
        catOnePosition.innerHTML = "";
    }
    let catOne = document.createElement("img");
    catOne.src = "./pink-cat.png";
    let num = randomHole();
    if (catTwoPosition && catTwoPosition.id == num) {
        return
    }
    catOnePosition = document.getElementById(num)
    catOnePosition.appendChild(catOne);
}

function moveCatTwo(){
    if(catTwoPosition) {
        catTwoPosition.innerHTML = "";
    }
    let catTwo = document.createElement("img");
    catTwo.src = "./blue-cat.png";
    let num = randomHole();
    if (catOnePosition && catOnePosition.id == num) {
        return
    }
    catTwoPosition = document.getElementById(num);
    catTwoPosition.appendChild(catTwo);
}

function selectHole() {
    
    if (this == catOnePosition) {
        score += 100;
        document.getElementById("score").innerText = score.toString();
    }  if (this == catTwoPosition) {
        score += 50;
        document.getElementById("score").innerText = score.toString();
    }
}

