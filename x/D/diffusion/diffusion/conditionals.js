/* Author: Aaron Weeden, Shodor */
/* Author: Lyndon Bowen, Person */

compute = function() {
  var total = 0.0;
  var n_neighbors = 0;

  if (hasNeighbor(ABOVE)) {
    total += neighbor(ABOVE); // add neighbor value to total
    n_neighbors++; // add 1 to n_neighbors
  }

  if (hasNeighbor(BELOW)) {
    total += neighbor(BELOW); // add neighbor value to total
    n_neighbors++; // add 1 to n_neighbors
  }

  if (hasNeighbor(LEFT)) {
    total += neighbor(LEFT); // add neighbor value to total
    n_neighbors++; // add 1 to n_neighbors
  }

  if (hasNeighbor(RIGHT)) {
    total += neighbor(RIGHT); // add neighbor value to total
    n_neighbors++; // add 1 to n_neighbors
  }
  
 

  total /= n_neighbors; // divide total by n_neighbors

  return total;
}

initialize = function() {
  if (inCenter()) {
    Value = 100.0;
  }
  else {
    Value = 0.0;
  }
}

setColor = function() {
  if (Value > 50) {
    Color = "red";
  }
  else if (Value > 25) {
    Color = "orange";
  }
  else if (Value > 12.5) {
    Color = "yellow";
  }
  else if (Value > 6.25) {
    Color = "green";
  }
  else if (Value > 3.125) {
    Color = "blue";
  }
  else {
    Color = "purple";
  }
}
