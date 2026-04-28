// Handle a mouse up event properly so it stops drawing, and starts listening for mouse down's.

function createGrid() {
    const finalCount = 255;
    let count = 0;

    while(count <= finalCount){
        let division = document.createElement('div');
        gridArea.appendChild(division);
        count += 1;
    }


}



let gridArea = document.querySelector('.grid-area'); // Container for our div's

gridArea.addEventListener('mousedown', startColor);

function startColor(event){
    event.target.style.backgroundColor = 'orange';
    keepColor();
}

function keepColor(event){
    gridArea.addEventListener('mouseover', handleMouseOver);
    gridArea.addEventListener('mouseup', stopColor);
}

function handleMouseOver(event){
    event.target.style.backgroundColor = 'orange';
}

function stopColor(event){
    gridArea.removeEventListener('mouseover', handleMouseOver);
    gridArea.removeEventListener('mouseup', stopColor)
}




createGrid();