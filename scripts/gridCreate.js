 /*
    Create a grid of 16 x 16 on the webpage within a div.

    FUNCTION createGrid
        CONST finalNumber EQUALS 16
        LET count EQUALS 0
        
        WHILE count LESS THAN OR EQUAL finalNumber
            let division EQUALS DOCUMENT CREATEELEMENT div
            gridArea.APPENDCHILD division 
            count PLUS EQUAL 1

LET gridArea EQUALS DOCUMENT QUERYSELECTOR .grid-area  

    To be continued... Have to implement grid first.
 */

function createGrid() {
    const finalCount = 255;
    let count = 0;

    while(count <= finalCount){
        let division = document.createElement('div');
        division.textContent = "div";
        gridArea.appendChild(division);
        count += 1;
        
    }
}

let gridArea = document.querySelector('.grid-area');

createGrid();
