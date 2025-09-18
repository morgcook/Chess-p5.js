var grid = new Array(8);
var selectedPiece = null;

function preload() {
  blPwn = loadImage("pieces/black_pawn.png");
  whPwn = loadImage("pieces/white_pawn.png");
  blRke = loadImage('pieces/black_rook.png');
  whRke = loadImage('pieces/white_rook.png');
  blKnt = loadImage('pieces/black_knight.png');
  whKnt = loadImage('pieces/white_knight.png');
  blBsp = loadImage('pieces/black_bishop.png');
  whBsp = loadImage('pieces/white_bishop.png');
  blQue = loadImage('pieces/black_queen.png');
  whQue = loadImage('pieces/white_queen.png');
  blKng = loadImage('pieces/black_king.png');
  whKng = loadImage('pieces/white_king.png');
}

function setup() {
  var cnv = createCanvas(400, 400);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  noCursor();
  resetGame();
}

function draw() {
  background(220);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // print(i + " " + j);
      grid[i][j].show();
    }
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (grid[i][j].piece) {
        grid[i][j].piece.show();
      }
    }
  }
  noStroke();
  fill(32, 120);
  ellipse(mouseX, mouseY, 12);
  stroke(0);
}

function mouseClicked() {
  let t = false;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      grid[i][j].click();
      if (grid[i][j].selected && grid[i][j].option && selectedPiece.piece) {
        if (grid[i][j].piece) {
          grid[i][j].removePiece();
        }
        grid[i][j].addPiece(selectedPiece.piece);
        selectedPiece.removePiece();
        t = true;
      }
      grid[i][j].selected = false;
      grid[i][j].option = false;
    }
  }
  if (t) {return;}
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (grid[i][j].piece) { 
        grid[i][j].piece.clicked = false;
        grid[i][j].click();
        if (grid[i][j].piece.clicked == true) {
          grid[i][j].piece.calculateMoves(grid);
          selectedPiece = grid[i][j];
          for (let k = 0; k < grid[i][j].piece.moves.length; k++) {
            grid[grid[i][j].piece.moves[k].x][grid[i][j].piece.moves[k].y].option = true;
          }
        }
      }
    }
  }
}

function resetGame() {
  for (let i = 0; i < 8; i++) {
    grid[i] = new Array(8);
    for (let j = 0; j < 8; j++) {
      if (j == 0 || j == 7) {
        if (i == 0 || i == 7) {
          grid[i][j] = new Square(i, j, new Rook(i, j));
        } else if (i == 1 || i == 6) {
          grid[i][j] = new Square(i, j, new Knight(i, j));
        } else if (i == 2 || i == 5) {
          grid[i][j] = new Square(i, j, new Bishop(i, j));
        } else if ((i == 3 && j == 7) || 
                   (i == 4 && j == 0)) {
          grid[i][j] = new Square(i, j, new Queen(i, j));
        } else {
          grid[i][j] = new Square(i, j, new King(i, j));
        }
      } else if (j == 1 || j == 6) {
        grid[i][j] = new Square(i, j, new Pawn(i, j));
      } else {
        grid[i][j] = new Square(i, j);
      }
    }
  }
}

function keyPressed() {
  if (key == 'r') {
    resetGame();
  }
}