var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0; 
  this.storage = {};
};

Stack.prototype.push = function(val){
  this.storage[this.counter] = val; 
  this.counter++;
}

Stack.prototype.pop = function(){
  var results = this.storage[this.counter -1]; 
  if(this.counter>0){
    this.counter--; 
  }
  return results;
}

Stack.prototype.size = function(){
  return this.counter; 
}


var st = new Stack(); 
console.log(st.push('v')); 
console.log(st.pop()); 
