const board = document.getElementById("board");
const statusText = document.getElementById("status");

let selected = null;

// simple board setup
let pieces = {
  0: ["♜","♞","♝","♛","♚","♝","♞","♜"],
  1: ["♟","♟","♟","♟","♟","♟","♟","♟"],
  6: ["♙","♙","♙","♙","♙","♙","♙","♙"],
  7: ["♖","♘","♗","♕","♔","♗","♘","♖"]
};

// create board
function drawBoard() {
  board.innerHTML = "";

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let square = document.createElement("div");
      square.classList.add("square");

      if ((row + col) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }

      square.dataset.row = row;
      square.dataset.col = col;

      let piece = pieces[row]?.[col];
      if (piece) square.textContent = piece;

      square.onclick = () => handleClick(row, col);

      board.appendChild(square);
    }
  }
}

function handleClick(row, col) {
  if (selected) {
    // move piece
    pieces[row] = pieces[row] || [];
    pieces[row][col] = pieces[selected.row][selected.col];

    pieces[selected.row][selected.col] = "";

    selected = null;
    drawBoard();
    return;
  }

  if (pieces[row]?.[col]) {
    selected = { row, col };
  }
}

drawBoard();
statusText.innerText = "Click pieces to move (basic version)";