var each = function(collection, iterator) {
    if(Array.isArray(collection)){
      for(var i=0; i<collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }
    else{
      for(var key in collection){
        iterator(collection[key], key, collection); 
      }
    }
  };

var extend = function(obj) {
    each(arguments, function(addObj){
      each(addObj, function(value, key){
        obj[key] = value; 
      });
    });
    return obj; 
  };

////////////////////////////////////////////////////
////////////////////////////////////////////////////

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  

  extend(newTree, treeMethods); 

  return newTree;
};

var treeMethods = {};

treeMethods.getTree = function(){
  return this; 
}

treeMethods.addChild = function(value) {
  var T = Tree(value);
  this.children.push(T); 
};

treeMethods.contains = function(target) {
  var treeTraverse = function(tree) {
    if (tree.value === target) { return true; }; 

    for (var i = 0; i < tree.children.length; i++){
      if (tree.children[i].value === target) { return true; }; 
      if (tree.children[i].children[0]){
        treeTraverse(tree.children[i]);
      }; 
    }
    return false; 
  }
  console.log(this); 
  return treeTraverse(this);


};


var T = Tree(4); 
console.log(T.addChild(2)); 
console.log(T.children[0].addChild(5)); 
console.log("contains ",T.contains(4)); 
console.log("contains ",T.contains(5)); 
 


/*
 * Complexity: What is the time complexity of the above functions?
 */
