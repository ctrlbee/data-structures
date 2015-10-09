var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var tailNode = Node(value); 
    if(list.tail){   
      list.tail.next = tailNode; 
    }
    list.tail = tailNode; 

    if(!list.head){
      list.head = tailNode; 
    }
  };

  list.removeHead = function() {
    var currHeadNext = list.head.next; 
    var currHead = list.head; 
    list.head = currHeadNext; 
    return currHead.value; 
  };


  list.contains = function(target){
    
    var results = false; 
    
    var checker = function(obj){
      if(obj.value === target){
        results = true; 
      }
      if(obj.next !== null){
       checker(obj.next); 
      } 
      return results; 
    }
    return checker(list.head); 
  };

  return list; 

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
