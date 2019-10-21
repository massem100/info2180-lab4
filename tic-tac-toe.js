"use strict";

window.onload = ()=>{
    // Select New Game Button, set clicker to restart game.
    var n_Game = document.getElementsByClassName("btn")[0];
    n_Game.addEventListener("click", () => {
        let status = document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
        let board = document.getElementById("board").children;
        board.innerHTML="";
        window.location.reload(); 
    
    });
  
    
    // select statements for the board and inner div statements.
    let board= document.getElementById("board");
    
        /*function addIDs() {
            let count = 1;
            let squares = board.children;
            for (var i = 0; i < squares.length; i++) {
                squares.setAttribute("id", count +i);
                console.log(squares.id);

            }
        }*/
    //Loops through div elements, add square styling, hover and click functions to the board
    for (let square of board.children) {
        var tracking = 0;
        
        square.classList.add('class','square');
        square.addEventListener("mouseover", function() {this.classList.add("hover");});
        square.addEventListener("mouseout", function() {this.classList.remove("hover");});
        square.addEventListener("click", function(){
            // In this game, Player X always goes first
            if (tracking % 2 === 0 && square.innerHTML === "") {
                square.innerHTML= "X";
                square.classList.add("square", "X");
                tracking += 1;
                let s = document.getElementById("board").children;
                // square 0 is actually square 1.. which further shifts the numbers.
                //Checking if X has won
                if (s[0].innerHTML === s[1].innerHTML && s[0].innerHTML === s[2].innerHTML && s[1].innerHTML === s[2].innerHTML && s[0].innerHTML !== "") {
                        displayWinMsg("X");
                }
                if (s[3].innerHTML === s[4].innerHTML && s[3].innerHTML === s[5].innerHTML && s[4].innerHTML === s[5].innerHTML && s[3].innerHTML !== "") {
                        displayWinMsg("X");
                }
                        
                if (s[6].innerHTML === s[7].innerHTML && s[6].innerHTML === s[8].innerHTML && s[7].innerHTML === s[8].innerHTML && s[6].innerHTML !== "") {
                        displayWinMsg("X");
                }

                if (s[0].innerHTML === s[4].innerHTML && s[0].innerHTML === s[8].innerHTML && s[4].innerHTML === s[8].innerHTML && s[0].innerHTML !== "") {
                        displayWinMsg("X");
                }
                if (s[2].innerHTML === s[4].innerHTML && s[2].innerHTML === s[6].innerHTML && s[4].innerHTML === s[6].innerHTML && s[2].innerHTML !== "") {
                        displayWinMsg("X");
                }
                if (s[0].innerHTML === s[3].innerHTML && s[0].innerHTML === s[6].innerHTML && s[3].innerHTML === s[6].innerHTML && s[0].innerHTML !== "") {
                        displayWinMsg("X");
                }
                if (s[1].innerHTML === s[4].innerHTML && s[1].innerHTML === s[7].innerHTML && s[4].innerHTML === s[7].innerHTML && s[1].innerHTML !== "") {
                        displayWinMsg("X");
                }
                if (s[2].innerHTML === s[5].innerHTML && s[2].innerHTML === s[8].innerHTML && s[5].innerHTML === s[8].innerHTML && s[2].innerHTML !== "") {
                        displayWinMsg("X");
                }
                // Checking if O has won
            } else if (tracking % 2 === 1 && square.innerHTML === "") {
                square.innerHTML = "O";
                square.classList.add("square", "O");
                tracking +=1;
                
                let s = document.getElementById("board").children;
                //square 0 is actually square 1.. which further shifts the numbers.
                if (s[0].innerHTML === s[1].innerHTML && s[0].innerHTML === s[2].innerHTML && s[1].innerHTML === s[2].innerHTML && s[0].innerHTML !== "") {
                    displayWinMsg("O");
                }
                if (s[3].innerHTML === s[4].innerHTML && s[3].innerHTML === s[5].innerHTML && s[4].innerHTML === s[5].innerHTML && s[3].innerHTML !== "") {
                    displayWinMsg("O");
                }
                if (s[6].innerHTML === s[7].innerHTML && s[6].innerHTML === s[8].innerHTML && s[7].innerHTML === s[8].innerHTML && s[6].innerHTML !== "") {
                    displayWinMsg("O");
                }
                if (s[0].innerHTML === s[4].innerHTML && s[0].innerHTML === s[8].innerHTML && s[4].innerHTML === s[8].innerHTML && s[0].innerHTML !== "") {
                    displayWinMsg("O");
                }
                if (s[2].innerHTML === s[4].innerHTML && s[2].innerHTML === s[6].innerHTML && s[4].innerHTML === s[6].innerHTML && s[2].innerHTML !== "") {
                    displayWinMsg("O");
                }
                if (s[0].innerHTML === s[3].innerHTML && s[0].innerHTML === s[6].innerHTML && s[3].innerHTML === s[6].innerHTML && s[0].innerHTML !== "") {
                    displayWinMsg("O");
                
                }
                if (s[1].innerHTML === s[4].innerHTML && s[1].innerHTML === s[7].innerHTML && s[4].innerHTML === s[7].innerHTML && s[1].innerHTML !== "") {
                    displayWinMsg("O");
                }
                if (s[2].innerHTML === s[5].innerHTML && s[2].innerHTML === s[8].innerHTML && s[5].innerHTML === s[8].innerHTML && s[2].innerHTML !== "") {
                    displayWinMsg("O");
                
                }
            
           
    }
});     

}
}
function displayWinMsg(letter){
    //Select game status
    let status = document.getElementById("status");
    status.innerHTML = `"Congratulations! ${letter} is the Winner!"`;
    status.classList.add("status", "you-won");

}
