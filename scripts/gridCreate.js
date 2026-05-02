let gridSizePrompt = document.querySelector('.grid-size-prompt');
gridSizePrompt.addEventListener('click', removeGrid);

const randomButton = document.querySelector('.random-color');
randomButton.addEventListener('click', randomColor);

const normalColor = document.querySelector('.normal-color');
normalColor.addEventListener('click', normalColorEnable);

let enableRandomColor = false;

function normalColorEnable(){
    enableRandomColor = false;
}

function randomColor(){
    enableRandomColor = true;
}

// Probably the least efficient way to do this, but it's not AI generated atleast. 
function rgbGenerate(){
    let count = 0;
    let rgbValues = [];
    let rgbString = '';
    let rgbMaximum = 2.5;
    let rgbMinimum = 1;
    let regexDecimal = /\./;
    while(count <= 2){
        rgbNumber = Math.random() * (rgbMaximum - rgbMinimum) + rgbMinimum;
        let rgbNumberString = String(rgbNumber);
        rgbNumberString = rgbNumberString.slice(0, 4);
        replaceDecimalString = rgbNumberString.replace(regexDecimal, '');
        rgbValues.push(replaceDecimalString);
        rgbString = rgbValues.join(" ");
        count += 1;
    }
    return rgbString;
}

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

let gridArea = document.querySelector('.grid-area');
gridArea.addEventListener('mousedown', startColor);

function startColor(event){
    if(enableRandomColor === true){
        let color = rgbGenerate();
        event.target.style.backgroundColor = `rgb(${color})`;
        keepColor();

    }else {
        event.target.style.backgroundColor = 'orange';
        keepColor();
    }
}

function keepColor(event){
    gridArea.addEventListener('mouseover', handleMouseOver);
    gridArea.addEventListener('mouseup', stopColor);
}

function handleMouseOver(event){
    if(enableRandomColor === true){
        let color = rgbGenerate();
        event.target.style.backgroundColor = `rgb(${color})`;
    } else {
        event.target.style.backgroundColor = 'orange';
    }

}

function stopColor(event){
    gridArea.removeEventListener('mouseover', handleMouseOver);
    gridArea.removeEventListener('mouseup', stopColor)
}

createGrid();