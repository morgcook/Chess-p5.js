// m is margin around images, controls piece sizes
let m = 1;

class Pawn {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.isWhite = true;
    if (this.j < 4) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }
    this.moves = [];
    this.clicked = false;
    this.type = "pawn";
  }
  
  show() {
    if (mouseX < width / 8 * this.i+50 && mouseX > width/8*this.i && 
        mouseY < width / 8 * this.j+50 && mouseY > width/8*this.j) {
      stroke(255, 0, 0);
      strokeWeight(2);
    } else {
      stroke(0);
      strokeWeight(1);
    }
    if (this.clicked) {
      stroke(0, 0, 255);
      strokeWeight(2);
    }
    if (!this.isWhite) {
      image(blPwn, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2);
    } else {
      image(whPwn, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2);
    }
  }
  
  calculateMoves(g) {
    this.moves = [];
    if (this.isWhite && this.j != 0) {
      if (this.j == 6 && !g[this.i][5].piece && !g[this.i][4].piece) {
        this.moves.push(createVector(this.i, 4));
      }
      if (!g[this.i][this.j-1].piece) {
        this.moves.push(createVector(this.i, this.j-1));
      }
      if (this.i != 7 && g[this.i+1][this.j-1].piece &&
          g[this.i+1][this.j-1].piece.isWhite != this.isWhite) {
        this.moves.push(createVector(this.i+1, this.j-1));
      }
      if (this.i != 0 && g[this.i-1][this.j-1].piece &&
          g[this.i-1][this.j-1].piece.isWhite != this.isWhite) {
        this.moves.push(createVector(this.i-1, this.j-1));
      }
    } else if (!this.isWhite && this.j != 7) {
      if (this.j == 1 && !g[this.i][2].piece && !g[this.i][3].piece) {
        this.moves.push(createVector(this.i, 3));
      }
      if (!g[this.i][this.j+1].piece) {
        this.moves.push(createVector(this.i, this.j+1));
      }
      if (this.i != 7 && g[this.i+1][this.j+1].piece &&
         g[this.i+1][this.j+1].piece.isWhite != this.isWhite) {
        this.moves.push(createVector(this.i+1, this.j+1));
      }
      if (this.i != 0 && g[this.i-1][this.j+1].piece &&
         g[this.i-1][this.j+1].piece.isWhite != this.isWhite) {
        this.moves.push(createVector(this.i-1, this.j+1));
      }
    }
  }
}

class Rook {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.isWhite = true;
    if (this.j < 4) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }
    this.moves = [];
    this.clicked = false;
    this.type = "rook";
  }
  
  show() {
    if (mouseX < width / 8 * this.i+50 && mouseX > width/8*this.i && 
        mouseY < width / 8 * this.j+50 && mouseY > width/8*this.j) {
      stroke(255, 0, 0);
      strokeWeight(2);
    } else {
      stroke(0);
      strokeWeight(1);
    }
    if (this.clicked) {
      stroke(0, 0, 255);
      strokeWeight(2);
    }
    if (this.isWhite) {
      image(whRke, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2)
    } else {
      image(blRke, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2)
    }
  }
  
  calculateMoves(g) {
    for (let i = this.i+1; i <= 7; i++) {
      if (!g[i][this.j].piece) {
        this.moves.push(createVector(i, this.j));
      } else {
        if (g[i][this.j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(i, this.j));
        }
        break;
      }
    }
    for (let i = this.i-1; i >= 0; i--) {
      if (!g[i][this.j].piece) {
        this.moves.push(createVector(i, this.j));
      } else {
        if (g[i][this.j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(i, this.j));
        }
        break;
      }
    }
    for (let j = this.j+1; j <= 7; j++) {
      if (!g[this.i][j].piece) {
        this.moves.push(createVector(this.i, j));
      } else {
        if (g[this.i][j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(this.i, j));
        }
        break;
      }
    }
    for (let j = this.j-1; j >= 0; j--) {
      if (!g[this.i][j].piece) {
        this.moves.push(createVector(this.i, j));
      } else {
        if (g[this.i][j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(this.i, j));
        }
        break;
      }
    }
  }
}

class Knight {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.isWhite = true;
    if (this.j < 4) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }
    this.moves = [];
    this.clicked = false;
    this.type = "knight";
  }
  
  show() {
    if (mouseX < width / 8 * this.i+50 && mouseX > width/8*this.i && 
        mouseY < width / 8 * this.j+50 && mouseY > width/8*this.j) {
      stroke(255, 0, 0);
      strokeWeight(2);
    } else {
      stroke(0);
      strokeWeight(1);
    }
    if (this.clicked) {
      stroke(0, 0, 255);
      strokeWeight(2);
    }
    if (this.isWhite) {
      image(whKnt, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2)
    } else {
      image(blKnt, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2)
    }
  }
  
  calculateMoves(g) {
    let arr1 = [-2, 2];
    let arr2 = [-1, 1];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (this.i + arr1[i] >= 0 && this.i + arr1[i] <= 7 &&
            this.j + arr2[j] >= 0 && this.j + arr2[j] <= 7) {
          if (!g[this.i+arr1[i]][this.j+arr2[j]].piece || 
             g[this.i+arr1[i]][this.j+arr2[j]].piece.isWhite != this.isWhite) {
            this.moves.push(createVector(this.i+arr1[i], this.j+arr2[j]));
          }
        }
        if (this.i + arr2[i] >= 0 && this.i + arr2[i] <= 7 &&
            this.j + arr1[j] >= 0 && this.j + arr1[j] <= 7) {
          
          if (!g[this.i+arr2[i]][this.j+arr1[j]].piece || 
              g[this.i+arr2[i]][this.j+arr1[j]].piece.isWhite != this.isWhite) {
            this.moves.push(createVector(this.i+arr2[i], this.j+arr1[j]));
          }
        }
      }
    }
  }
}

class Bishop {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.isWhite = true;
    if (this.j < 4) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }
    this.moves = [];
    this.clicked = false;
    this.type = "bishop";
  }
  
  show() {
    if (mouseX < width / 8 * this.i+50 && mouseX > width/8*this.i &&
        mouseY < width / 8 * this.j+50 && mouseY > width/8*this.j) {
      stroke(255, 0, 0);
      strokeWeight(2);
    } else {
      stroke(0);
      strokeWeight(1);
    }
    if (this.clicked) {
      stroke(0, 0, 255);
      strokeWeight(2);
    }
    if (this.isWhite) {
      image(whBsp, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2)
    } else {
      image(blBsp, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2)
    }
  }
  
  calculateMoves(g) {
    let arr = [-1, 1];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        let tempi = arr[i];
        let tempj = arr[j];
        while (this.i + tempi >= 0 && this.i + tempi <= 7 &&
               this.j + tempj >= 0 && this.j + tempj <= 7) {
          if (g[this.i+tempi][this.j+tempj].piece && 
              g[this.i+tempi][this.j+tempj].piece.isWhite == this.isWhite) {
            break;
          }
          this.moves.push(createVector(this.i+tempi, this.j+tempj));
          if (g[this.i+tempi][this.j+tempj].piece && 
              g[this.i+tempi][this.j+tempj].piece.isWhite != this.isWhite) {
            break;
          }
          if (tempi < 0) {
            tempi--;
          } else {
            tempi++;
          }
          if (tempj < 0) {
            tempj--;
          } else {
            tempj++;
          }
        }
      }
    }
  }
}

class Queen {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.isWhite = true;
    if (this.j < 4) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }
    this.moves = [];
    this.clicked = false;
    this.type = "queen";
  }
  
  show() {
    if (this.isWhite) {
      image(whQue, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2);
    } else {
      image(blQue, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2);
    }
  }
  
  calculateMoves(g) {
    let arr = [-1, 1];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        let tempi = arr[i];
        let tempj = arr[j];
        while (this.i + tempi >= 0 && this.i + tempi <= 7 &&
               this.j + tempj >= 0 && this.j + tempj <= 7) {
          if (g[this.i+tempi][this.j+tempj].piece && 
              g[this.i+tempi][this.j+tempj].piece.isWhite == this.isWhite) {
            break;
          }
          this.moves.push(createVector(this.i+tempi, this.j+tempj));
          if (g[this.i+tempi][this.j+tempj].piece && 
              g[this.i+tempi][this.j+tempj].piece.isWhite != this.isWhite) {
            break;
          }
          if (tempi < 0) {
            tempi--;
          } else {
            tempi++;
          }
          if (tempj < 0) {
            tempj--;
          } else {
            tempj++;
          }
        }
      }
    }
    for (let i = this.i+1; i <= 7; i++) {
      if (!g[i][this.j].piece) {
        this.moves.push(createVector(i, this.j));
      } else {
        if (g[i][this.j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(i, this.j));
        }
        break;
      }
    }
    for (let i = this.i-1; i >= 0; i--) {
      if (!g[i][this.j].piece) {
        this.moves.push(createVector(i, this.j));
      } else {
        if (g[i][this.j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(i, this.j));
        }
        break;
      }
    }
    for (let j = this.j+1; j <= 7; j++) {
      if (!g[this.i][j].piece) {
        this.moves.push(createVector(this.i, j));
      } else {
        if (g[this.i][j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(this.i, j));
        }
        break;
      }
    }
    for (let j = this.j-1; j >= 0; j--) {
      if (!g[this.i][j].piece) {
        this.moves.push(createVector(this.i, j));
      } else {
        if (g[this.i][j].piece.isWhite != this.isWhite) {
          this.moves.push(createVector(this.i, j));
        }
        break;
      }
    }
  }
}

class King {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.isWhite = true;
    if (this.j < 4) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }
    this.moves = [];
    this.clicked = false;
    this.type = "king";
  }
  
  show() {
    if (this.isWhite) {
      image(whKng, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2);
    } else {
      image(blKng, width/8*this.i+m, width/8*this.j+m, width/8-m*2, width/8-m*2);
    }
  }
  
  calculateMoves(g) {
    let arr = [-1, 0, 1];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let temp = grid[this.i+arr[i]][this.j+arr[j]];
        if (this.i+arr[i] >= 0 && this.i+arr[i] <= 7 && 
            this.j+arr[j] >= 0 && this.j+arr[j] <= 7) {
          if (temp.piece && temp.piece.isWhite == this.isWhite) {
            continue;
          } else {
            this.moves.push(createVector(this.i+arr[i], this.j+arr[j]));
          }
        }
      }
    }
  }
}