"use strict";
// Tic Tac Toe Game
// ===== State =====
let board = Array(9).fill(null);
let currentPlayer = "X";
let status_game = "playing";
let status_banner = document.getElementById("status");
const board_cells = document.getElementById("board");
const cells = Array.from(board_cells.children);
const resetBtn = document.querySelector("#reset-btn");
// ===== Win patterns =====
const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// ===== Pure Logic =====
function getWinner(board) {
    for (const [a, b, c] of WIN_PATTERNS) {
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return board[a];
        }
    }
    return null;
}
function isDraw(board) {
    return board.every((cell) => cell !== null);
}
function switchPlayer(player) {
    return player === "X" ? "O" : "X";
}
// ===== Game Actions =====
function makeMove(index) {
    if (status_game !== "playing")
        return;
    if (board[index] !== null)
        return;
    // update state
    board[index] = currentPlayer;
    evaluateGame();
    render();
}
function evaluateGame() {
    const winner = getWinner(board);
    if (winner) {
        status_game = "won";
        status_banner.innerHTML = `Congratulations! ${currentPlayer} is the Winner!`;
        status_banner === null || status_banner === void 0 ? void 0 : status_banner.classList.add("status", "you-won");
        return;
    }
    if (isDraw(board)) {
        status_game = "draw";
        status_banner.innerHTML = `The game is a draw. Let's go home...`;
        return;
    }
    if (winner || isDraw(board)) {
        for (let square of cells) {
            square.removeAttribute("onClick");
        }
    }
    currentPlayer = switchPlayer(currentPlayer);
}
function resetGame() {
    board = Array(9).fill(null);
    status_banner.innerHTML =
        "Move your mouse over a square and click to play an X or an O.";
    status_banner.classList.remove("status", "you-won");
    currentPlayer = "X";
    status_game = "playing";
    render();
}
// ===== UI Rendering =====
if (cells) {
    cells.forEach((cell, index) => {
        cell.classList.add("class", "square");
        cell.addEventListener("mouseover", function () {
            this.classList.add("hover");
        });
        cell.addEventListener("mouseout", function () {
            this.classList.remove("hover");
        });
        cell.addEventListener("click", () => makeMove(index));
    });
    resetBtn.addEventListener("click", resetGame);
}
function render() {
    // if (cells) {
    //   cells.forEach((cell, index) => {
    //     cell.textContent = board[index] ?? "";
    //   });
    cells.forEach((cell, index) => {
        const value = board[index];
        cell.textContent = value !== null && value !== void 0 ? value : "";
        // remove old classes first
        cell.classList.remove("X", "O");
        if (value) {
            cell.classList.add("square", value);
        }
    });
}