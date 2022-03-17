function filterNumbersFromArray(arr) {
  // Write the code that goes here
  arr.sort();
  for( var item = 0; item < arr.length; item++){ 
    
    if (typeof arr[item] !== 'number') { 
    
        arr.splice(item, 1);
        item = item - 1
    }
}
}

var arr = [1, 'a', 'b',true, 2];
filterNumbersFromArray(arr);
// At this point, arr should have been modified in place
// and contain only 1 and 2.
for (var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
