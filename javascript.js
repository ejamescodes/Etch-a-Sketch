let split = 16;
let size = 400;

const content = document.querySelector("#container");

const changeSizeBtn = document.createElement("button");
changeSizeBtn.textContent = "Adjust Grid Size";
content.appendChild(changeSizeBtn);

const grid = document.createElement("div");
grid.setAttribute("id", "grid");
content.appendChild(grid);
generateGrid();

function generateGrid(){
    for(let i = 0; i < split; i++){
        let row = document.createElement("div");
        row.classList.add("row");
/*        for(let j = 0; j < split; j++){
            const col = document.createElement("div");
            col.classList.add("col");
            col.classList.add("cell");
            col.style.cssText = `padding: ${length/split}px;`;
            row.appendChild(col);
        }
            */
        grid.appendChild(row);
    }
}

function deleteGrid(){
    const delElements = document.getElementsByClassName("row");
    while(delElements.length > 0){
        delElements[0].parentNode.removeChild(delElements[0]);
    }
}

changeSizeBtn.onclick = () => {
    let inputSize = prompt("Input grid size");
    //console.log(typeof Number(inputSize));
    //if(typeof Number(inputSize) === Number){
        deleteGrid();
        if(inputSize >= 100){
            split = 100;
        }
        else{
            split = inputSize;
        }
        generateGrid();

    //}
    /*else {
        alert("Invalid Input");
    }*/

}