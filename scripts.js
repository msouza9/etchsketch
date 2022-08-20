// Javascript! //

function createGrid() {
    const size = prompt("How large would you like your grid?", "16");

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
    document.getElementById("btn").disabled = true;
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
