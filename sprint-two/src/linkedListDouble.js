var DoubleLL = function(){
  this.head = null; 
  this.tail = null; 
}

DoubleLL.prototype.addToHead = function(val){
  var node = new Node(val); 
  if(this.head){
    this.head.prev = node.value; 
    node.next = this.head; 
  }
  this.head = node; 

  if(!this.tail){
    this.tail = node;   
  }
}

DoubleLL.prototype.removeHead = function(){
  if(this.head){
    var curHead = this.head; 
    this.head = this.head.next; 
    delete curHead; 
  }
}

DoubleLL.prototype.addToTail = function(val){
  var node = new Node(val); 
  if(this.tail){
    node.prev = this.tail.value; 
    this.tail.next = node; 
  }
  this.tail = node; 
}

DoubleLL.prototype.removeTail = function(){
  var currTail = this.tail; 
  this.tail = this.tail.prev;
  delete currTail; 
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
var n3 = new Node('yyy');
var dll = new DoubleLL(n); 
dll.addToHead(n); 
//console.log(dll); 
dll.addToHead(n2); 
//console.log(dll.head); 
dll.addToTail(n3); 
console.log(dll.tail);
//console.log(dll.head.next.next.value); 





