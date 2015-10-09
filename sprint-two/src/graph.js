

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
  for(var key in this.storage){
    if(key===node.toString()){
      return true;
    }
  }
  return false; 
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage[node]) {
    delete this.storage[key][node]; 
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
  for(var key in this.storage){
    console.log(key); 
    cb(key); 
  }
};

var g = new Graph(); 
g.addNode(3);
g.addNode(4); 
g.addEdge(3, 4); 
console.log(g.hasEdge(3, 4));
console.log(g.hasEdge(3, 9));
console.log(g); 
console.log("contains ", g.contains(4)); 
g.removeNode(4); 
console.log(g);
console.log(g.forEachNode(function(item){return item+1})); 
/*
 * Complexity: What is the time complexity of the above functions?
 */


