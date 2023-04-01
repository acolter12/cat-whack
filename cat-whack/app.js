renderPage();

function renderPage() {
    beginGame();
    
}

let catOnePosition;
let catTwoPosition;

function beginGame() {
    for (let i = 0; i < 9; i++) {
        let hole = document.createElement("div");
        hole.id = i.toString();
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
    catOnePosition = document.getElementById(num)
    catOnePosition.appendChild(catOne);

    
    // console.log(catOnePosition)
}

function moveCatTwo(){
    if(catTwoPosition) {
        catTwoPosition.innerHTML = "";
    }
    let catTwo = document.createElement("img");
    catTwo.src = "./blue-cat.png";
    let num = randomHole();
    catTwoPosition = document.getElementById(num);
    catTwoPosition.appendChild(catTwo);
    console.log(catTwoPosition)
}

