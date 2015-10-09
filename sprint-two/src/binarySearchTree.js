var BinarySearchTree = function(value) {
  var storage = Object.create(bsproto); 
  this._root = value; 
  this._left = null; 
  this._right = null; 
  return storage; 
};

var bsproto = {}; 

bsproto.insert = function(value){

}

bsproto.contains = function(value){

}

bsproto.depthFirstLog = function(cb){

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
