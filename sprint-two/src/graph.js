

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {}; 
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {}; 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in node) {
    
  }
  delete this.storage[node]; 
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode][toNode] && this.storage[toNode][fromNode]) { return true };
  return false;  
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = toNode; 
  this.storage[toNode][fromNode] = fromNode; 
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode]; 
  delete this.storage[toNode][fromNode]; 
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var g = new Graph(); 
g.addNode(3);
g.addNode(4); 
g.addEdge(3, 4); 
console.log(g.hasEdge(3, 4));
console.log(g); 
g.removeNode(4); 
console.log(g);

console.log(g); 
/*
 * Complexity: What is the time complexity of the above functions?
 */


