// Javascript! //

function createGrid() {
    for(let i=0; i<16; i++) {
        let column = document.createElement("div");
        for(let j=0; j<16; j++) { 
            let cell = document.createElement("div");
            cell.style.width = "31.25px";
            cell.style.height = "31.25px";
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
    this.style.backgroundColor = "white";
}

function reset() {
    document.location.reload();
}
