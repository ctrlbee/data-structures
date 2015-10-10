var DoubleLL = function(){
  this.head = null; 
  this.tail = null; 
}

DoubleLL.prototype.addToHead = function(val){
  var node = new Node(val); 
  if(!this.head){
    this.head = node;   
    return; 
  }else{
    this.head.next = node; 
    this.head = node; 
  }
}

DoubleLL.prototype.removeHead = function(){

}

DoubleLL.prototype.addToTail = function(node){

}

DoubleLL.prototype.removeTail = function(){

}

DoubleLL.prototype.contains = function(){

}

var Node = function(val){
  this.prev = null;  
  this.value = val; 
  this.next = null;
}

var n = new Node('vvv');
var n2 = new Node('xxx');
var dll = new DoubleLL(n); 
dll.addToHead(n); 
dll.addToHead(n2); 
dll.addToHead(n); 
console.log(dll); 



