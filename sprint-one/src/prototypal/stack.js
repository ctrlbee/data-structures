var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {}; 
  obj.counter = 0;

  return obj; 
};

var stackMethods = {
  size: function(){
    return this.counter; 
  }, 
  push : function(value){
    this.storage[this.counter] = value; 
    this.counter++;
  }, 
  pop : function(){
    var results = this.storage[this.counter-1]; 
    if(this.counter>0){
      this.counter--; 
    }
    return results; 
  }
};

var st = Stack(); 
console.log(st.size()); 
console.log(st.push('a'));
console.log(st.push('b'));
console.log(st.size()); 
console.log(st.pop());   
console.log(st.size()); 
