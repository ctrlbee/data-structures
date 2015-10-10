

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.getAll = function(){
  return this._storage; 
}

HashTable.prototype.insert = function(k, v) {
  //get index
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //create bucket of what is at that index - use get
  var bucket = [];

  if(this._storage.get(index)!==undefined){
    bucket = this._storage.get(index); 
  } 

  //check if k already exists 
  var dupe = false; 
  for(var key in bucket){
    if(bucket[key][0]===k){
      bucket[key] = [k,v]; 
      dupe = true; 
    }
  }

  //push [k,v] onto bucket
  if(!dupe){
    bucket.push([k,v]);   
  }
  
  //write bucket back to that index
  this._storage.set(index, bucket); 

  console.log("index ", index, " bucket", this._storage.get(index)); 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  for(var key in bucket){
    if(bucket[key][0] ===k){
      return bucket[key][1]; 
    }    
  }
  return null; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0]===k){
       bucket.splice(i,1);  //HAD TO CHANGE TEST CASE TO LOOK FOR UNDEFINED INSTEAD OF NULL
       this._storage.set(index, bucket); 
    }
  }
};


/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 // var la = LimitedArray(4); 
 // la.set(2, 'hi'); 
 // la.set(3, 'yo'); 
 // la.set(1, 'howdy'); 
 // la.set(0, 'sup'); 
 // console.log(la.get(2)); 


 var HT = new HashTable(); 
 console.log(HT.insert('quick', 'fox')); 
 console.log(HT.insert('slick', 'cat')); 
 console.log(HT.retrieve('slick'));
 HT.remove('slick'); 
 console.log(HT.retrieve('quick')); 
 console.log(HT.retrieve('slick'));



