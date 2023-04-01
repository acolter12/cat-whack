renderPage();

function renderPage() {
    beginGame();
    
}

let catOnePosition;

function beginGame() {
    for (let i = 0; i < 9; i++) {
        let hole = document.createElement("div");
        hole.id = i.toString();
        document.getElementById("game-board").appendChild(hole);
    }
    
    setInterval(moveCatOne, 1000);
}

function randomHole(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function moveCatOne(){
    if (catOnePosition) {
        catOnePosition.innerHTML = "";
    }
    let cat = document.createElement("img");
    cat.src = "./pink-cat.png";
    let num = randomHole();
    catOnePosition = document.getElementById(num)
    catOnePosition.appendChild(cat);

    
    console.log(catOnePosition)
}

