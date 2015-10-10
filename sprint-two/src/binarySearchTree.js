var BinarySearchTree = function(value) {
  var storage = Object.create(bsproto); 
  storage.value = value; 
  storage.left = null; 
  storage.right = null; 
  return storage; 
};

var bsproto = {}; 

bsproto.getTree = function(){
  return this;  
}

bsproto.getRoot = function(){
  return this.value;  
}

bsproto.getLeft = function(){
  return this.left;  
}

bsproto.getRight = function(){
  return this.right;  
}

bsproto.setLeft = function(v){
  this.left = v; 
}

bsproto.setRight = function(v){
  this.right = v;   
}

bsproto.insert = function(value){
  //create a BST with value as root 
  var bst = BinarySearchTree(value); 
  if(!this.value){
    this.value = bst;  
    return; 
  }
  
  var putValueInTree = function(val, tree){

    var curRoot = tree.getRoot();     
    var curLeft = tree.getLeft(); 
    var curRight = tree.getRight();
    
    if(val<curRoot){
      if(curLeft===null){
         tree.setLeft(bst);   
         //console.log(tree);
         return; 
      }
      putValueInTree(val, tree.getLeft()); 
    }
    if(val>curRoot){
      if(curRight===null){
        tree.setRight(bst); 
        return; 
      }
      putValueInTree(val, tree.getRight()); 
    }
  }

  putValueInTree(value, this); 

}


bsproto.contains = function(value){
  
  var lookForVal = function(tree){
    if(tree.value===value){
      return true; 
    }
    if(value<tree.value && tree.left){
      return lookForVal(tree.left);   
    }
    if(value>tree.value && tree.right){ 
     return lookForVal(tree.right);  
    }
    return false; 
  }
  return lookForVal(this); 
}

bsproto.depthFirstLog = function(func){

  var runFunc = function(tree){
    func(tree.value);
    if(tree.left){
      runFunc(tree.left);
    } 
    if(tree.right){
      runFunc(tree.right); 
    }
  }

  return runFunc(this); 
}

var bst = BinarySearchTree(5);
bst.insert(3); 
console.log(bst.getTree()); 
bst.insert(1); 
console.log(bst.getTree()); 
bst.insert(8); 
console.log(bst.getTree()); 
bst.insert(4); 
console.log("bst: "+bst.left.left.value); 
console.log(bst.contains(4)); 


/*
 * Complexity: What is the time complexity of the above functions?
 */
