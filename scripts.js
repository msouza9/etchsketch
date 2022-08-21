// Javascript! //

function createGrid() {
    
    const size = prompt("Please select grid size less than 100", "16");

    if (size > 100) {
        alert("Enter a value below 100");
        createGrid();
    }
    else{

    clearGrid();

    const pixel = 500/size;

    for(let i=0; i<size; i++) {
        let column = document.createElement("div");
        for(let j=0; j<size; j++) { 
            let cell = document.createElement("div");
            cell.style.width = `${pixel}px`;
            cell.style.height = `${pixel}px`;
            cell.style.background = "red";
            cell.style.display = "inline-block";
            cell.addEventListener("mouseover", over);

            column.appendChild(cell);
            }
        document.getElementById("grid").appendChild(column);
        }
        /*document.getElementById("btn").disabled = true;*/

        const count = document.getElementById("pixelCount");
        count.textContent = "Pixel Count is " + size;
    }
}

document.getElementById("grid").addEventListener("mouseover", over);

function over() {
    if(this.style.backgroundColor === "red"){
    this.style.backgroundColor = "black";
    }
}

function reset() {
    document.location.reload();
}

function clearGrid() {
    let board = document.querySelector("#grid");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
}
