"use strict";

window.onload = ()=>{
    // select statements for the board and inner div statements.
    let  board= document.getElementById("board").children;
    
    
    for (var i =0; i< board.length; i++){
        board[i].setAttribute('class','square');
    
   

}
    board.addEventListener("mouseover", () => {
        board.classList.add("hover")
    });
    board.addEventListener("mouseleave", () => {
        board.classList.remove("hover")
    });
 var btnC = document.getElementsByClassName("btn")[0];
 btnC.addEventListener("click", () => { window.location.reload()});



}

