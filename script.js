const gridContainer = document.querySelector("#grid-container");
let cells = document.querySelectorAll(".cell");

document.onload = defaultGrid();
let mouseDown = 0;

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
    let newGridSize = prompt("Please enter a new grid size");
    makeGrid(newGridSize);
});

function defaultGrid(){
    makeGrid(16);
}

function makeGrid(size){

    if(!cells.length == 0){
        while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
        }
    }
    for(r = 0; r < size; r++){
        for (c = 0; c < size; c++){
            let cell = document.createElement("div");
            gridContainer.appendChild(cell).className = "cell";
            gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
        }
    }
    cells = document.querySelectorAll(".cell");
    // cells.forEach((cell) => {
    //     cell.addEventListener("mouseover", (e) => {
    //         e.target.style.backgroundColor = "black";
    //         });
    // });


    let timer;
    document.addEventListener("mousedown", function(){
        timer=setInterval(function(){
            cells.forEach((cell) => {
                cell.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = "black";
                    });
            });
        }, 5); // the above code is executed every 5 ms
    });
    document.addEventListener("mouseup", function(){
        if (timer) clearInterval(timer);
    });

    let mouseDown = 0;
    // document.body.onmousedown = function() { 
    //     mouseDown++;
    //     document.body.onmouseup = function() {
    //         mouseDown--;
    //     }
    //     if(mouseDown > 0){
    //         cells.forEach((cell) => {
    //             cell.addEventListener("mouseover", "mousedown", (e) => {
    //                 e.target.style.backgroundColor = "black";
    //                 });
    //         });
    //     }
    // }
}
