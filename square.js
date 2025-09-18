class Square {
  constructor(i, j, piece=null) {
    this.i = i;
    this.j = j;
    this.piece = piece;
    this.option = false;
    this.color = color(0);
    this.col();
    this.selected = false;
  }
  
  show() {
    rectMode(CORNER);
    noStroke();
    let num = width/8;
    if (!this.selected) {
      fill(this.color);
    } else {
      fill(245, 117, 100);
    }
    square(num * this.i, num * this.j, num);
  }
  
  col() {
    if ((this.i + this.j) % 2 == 0) {
      this.color = color(132, 166, 131);
    } else {
      this.color = color(196, 222, 195);
    }
  }
  
  addPiece(p) {
    this.piece = p;
    this.piece.i = this.i;
    this.piece.j = this.j;
    this.piece.moves = [];
    this.piece.clicked = false;
  }
  
  removePiece() {
    this.piece = null;
  }
  
  click() {
    if (mouseX < width / 8 * this.i+50 && mouseX > width/8*this.i && 
        mouseY < width / 8 * this.j+50 && mouseY > width/8*this.j) {
      if (this.piece) {
        this.piece.clicked = true;
      } 
      this.selected = true;
    }
  }
  
}