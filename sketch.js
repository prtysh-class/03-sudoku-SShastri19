var board = [];
var content;


class Cell {
  constructor ( _x,_y, _w, _h) {
  this.x = _x;
  this.y = _y;
  this.width = _w;  
  this.height = _h;
    this.content = content;
  } 
 
    show() {
    rect(this.x, this.y, 50, 50);
    
    }
 // let square = new Cell(0,0, 1,1);
}


function setup() {
  createCanvas(450, 450);}

   for (var i = 0; i < 9; i++); {
    for (var j = 0; j < 9; j++); {
      board.push(new Cell(50 * i, 50 * j, 9 * i +j));
      }
   }
  		
  for (var i = 0;i < 9; i++) {
  for (var j = 0; j< 9; j ++) {
    board[9 * i + j].show(); 
    // document.write(board[9* i +j]);
  }
}


function draw() {
  background(255);
  strokeWeight(0.5);
  noFill();
  rect(0,0,50,50);
  for (var i = 0;i < 9; i++) {
  for (var j = 0; j< 9; j ++) {
    board[9 * i + j].show();
     // document.write(board[9* i +j]);
  
  }
  
  }
}


// class Cell {
//   constructor ( _x,_y, _w, _h) {
//   this.x = _x;
//   this.y = _y;
//   this.width = _w;  
//   this.height = _h;
//   }         
// }


//   square = new Cell( 0,0,1,1);



