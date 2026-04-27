
function createGrid() {
    const finalCount = 255;
    let count = 0;

    while(count <= finalCount){
        let division = document.createElement('div');
        gridArea.appendChild(division);
        count += 1;
    }

    gridArea.addEventListener('mouseover', event => {
        if(event.target.tagName === 'DIV'){
            event.target.style.backgroundColor = 'orange';
            console.log('entered div');
        }
    });

}

let gridArea = document.querySelector('.grid-area'); // Container for our div's

createGrid();