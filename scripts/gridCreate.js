let gridSizePrompt = document.querySelector('.grid-size-prompt');
gridSizePrompt.addEventListener('click', removeGrid);

function removeGrid(event){
    let number = Number(prompt("Number: "));
    const divisionToRemove = document.querySelectorAll('div');
    let remove = divisionToRemove.forEach(item => {
        gridArea.removeChild(item);
    });
    if(number > 100){
        alert('Must not exceed 100');
        createGrid(Number(16));
    }else {
        createGrid(number);
    }
}

function createGrid(number) {
    if(number){
        count = 0;
        calculateFinalNumber = number * number;

        while(count <= calculateFinalNumber){
            let division = document.createElement('div');
            gridArea.appendChild(division);
            count += 1;
        }
    } else{
        let finalCount = 255;
        let count = 0;

        while(count <= finalCount){
            let division = document.createElement('div');
            gridArea.appendChild(division);
            count += 1;
            }
    }


}

const preventDrag = document.addEventListener('dragstart', event => event.preventDefault()); // Prevent dragging of colored blocks

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