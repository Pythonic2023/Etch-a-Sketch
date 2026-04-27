function mouseOver(){
    gridArea.addEventListener('mouseup', event => {

    })
    gridArea.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "orange";
    })

}

// Handle a mouse up event properly so it stops drawing, and starts listening for mouse down's.

function createGrid() {
    const finalCount = 255;
    let count = 0;

    while(count <= finalCount){
        let division = document.createElement('div');
        gridArea.appendChild(division);
        count += 1;
    }

    gridArea.addEventListener('mousedown', event => {
        if(event.target.tagName === 'DIV'){
            mouseOver();
        }
    });

}



let gridArea = document.querySelector('.grid-area'); // Container for our div's

createGrid();