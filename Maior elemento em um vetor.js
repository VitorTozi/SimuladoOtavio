function largestOfFour(arr) {
    var largestNumber = [0,0,0,0];
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
         }
     }
  }
  return largestNumber;
 }
 largestOfFour([[6, 3, 1, 2], [11, 29, 12, 21], [32, 38, 32, 39], [1000, 1011, 852, 4]]);