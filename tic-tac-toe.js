"use strict";

window.onload = ()=>{
    // Select New Game Button, set clicker to restart game.
    var n_Game = document.getElementsByClassName("btn")[0];
    n_Game.addEventListener("click", () => {window.location.reload(); });
  
    //Select game status
    let status = document.getElementById("status");

    // select statements for the board and inner div statements.
    let board= document.getElementById("board");
    
    //Loops through div elements, add square styling, hover and click functions to the board
    for (let square of board.children) {
        var tracking = 0;
        square.classList.add('class','square');
        square.addEventListener("mouseover", function() {this.classList.add("hover");});
        square.addEventListener("mouseout", function() {this.classList.remove("hover");});
        square.addEventListener("click", function(){
            // In this game, Player X always goes first
            //
            if (tracking % 2 === 0 && square.innerHTML ===""&& square.innerHTML !== "O"){
                square.innerHTML= "X";
                square.classList.add("square", "X");
                tracking += 1;
            }else if ( tracking % 2 === 1 && square.innerHTML ==="" && square.innerHTML !=="X"){
                square.innerHTML = "O";
                square.classList.add("square", "O");
                tracking +=1;
            }
            
        } );
    }
    }


