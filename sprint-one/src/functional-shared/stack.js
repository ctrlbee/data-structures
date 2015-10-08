var extend = function(obj){
  var args = Array.prototype.slice.call(arguments); 
  for(var i=0; i<args.length; i++){
    for(var key in args[i]){
      obj[key] = args[i][key];   
    }
  }
}

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {}; 
  someInstance.counter = 0;  

  extend(someInstance, stackMethods);

  return someInstance; 

};

var stackMethods = {
  size : function(){
    return this.counter; 
  },
  push : function(value){
    this.storage[this.counter] = value; 
    this.counter++; 
  },
  pop : function(){
    var result = this.storage[this.counter - 1]; 
    if(this.counter>0){
      this.counter--; 
    }
    return result; 
  }
};

var st = Stack(); 
console.log(st.size()); 

