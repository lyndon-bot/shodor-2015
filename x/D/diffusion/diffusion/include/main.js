/* Diffusion Model
 * Author: Aaron Weeden, Shodor, 2014-15
 */

var N_ROWS = 20;
var N_COLS = 20;
var INIT_VAL = 100.0;
var INTERVAL_LEN = 200;
var VALUE_COLOR = "black";
var OUTLINE_COLOR = "black";

var ABOVE = 0;
var BELOW = 1;
var LEFT = 2;
var RIGHT = 3;

var Can;
var Ctx;
var Width;
var Height;
var Cells;
var NewCells;
var Row;
var Col;
var Value;
var Color;

onload = function () {
  init();
}

advanceCells = function() {
  for (var i = 0; i < N_ROWS; i++) {
    for (var j = 0; j < N_COLS; j++) {
      Cells[i][j] = NewCells[i][j];
    }
  }
}

computeCell = function(i, j) {
  Row = i;
  Col = j;
  NewCells[i][j] = compute();
}

computeCells = function() {
  for (var i = 0; i < N_ROWS; i++) {
    for (var j = 0; j < N_COLS; j++) {
      computeCell(i, j);
    }
  }
}

draw = function() {
  Ctx.clearRect(0, 0, Can.width, Can.height);
  for (var i = 0; i < N_ROWS; i++) {
    for (var j = 0; j < N_COLS; j++) {
      fillCell(i, j);
      outlineCell(i, j);
      showValue(i, j);
    }
  }
}

fillCell = function(i, j) {
  Value = Cells[i][j];
  setColor();
  Ctx.fillStyle = Color;
  Ctx.fillRect(j * Width, i * Height, Width, Height
  );
}

hasNeighbor = function(dir) {
  switch (dir) {
    case ABOVE:
      return Row > 0;
    case BELOW:
      return Row < N_ROWS - 1;
    case LEFT:
      return Col > 0;
    case RIGHT:
      return Col < N_COLS - 1;
  }
}

inCenter = function() {
  return (
    Row >= N_ROWS / 4 &&
    Row < 3 * N_ROWS / 4 &&
    Col >= N_COLS / 4 &&
    Col < 3 * N_COLS / 4
  );
}

init = function() {
  initGlobals();
  initCells();
  draw();
  setInterval(step, INTERVAL_LEN);
}

initGlobals = function() {
  Can = document.getElementById("can");
  Ctx = Can.getContext("2d");
  Width = Can.width / N_COLS;
  Height = Can.height / N_ROWS;
}

initCells = function() {
  Cells = [];
  NewCells = [];
  for (var i = 0; i < N_ROWS; i++) {
    Cells.push([]);
    NewCells.push([]);
    for (var j = 0; j < N_COLS; j++) {
      Cells[i].push({});
      NewCells[i].push({});
      initCell(i, j);
    }
  }
}

initCell = function(i, j) {
  Row = i;
  Col = j;
  initialize();
  Cells[i][j] = Value;
}

neighbor = function(dir) {
  switch (dir) {
    case ABOVE:
      return Cells[Row - 1][Col];
    case BELOW:
      return Cells[Row + 1][Col];
    case LEFT:
      return Cells[Row][Col - 1];
    case RIGHT:
      return Cells[Row][Col + 1];
  }
}

outlineCell = function(i, j) {
  Ctx.strokeStyle = OUTLINE_COLOR;
  Ctx.strokeRect(j * Width, i * Height, Width, Height);
}

showValue = function(i, j) {
  Ctx.fillStyle = VALUE_COLOR;
  Ctx.fillText(Math.round(Cells[i][j]), j * Width, (i + 1) * Height
  );
}

step = function() {
  computeCells();
  advanceCells();
  draw();
}
