//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

//Input: digits = [9,9,9]
//Output: [1,0,0,0]

var plusOne = function(digits) {
    console.log("array", digits)
    let carryover;
    
    let len = digits.length;
    console.log("array length", len)
    
    let lastIndex = len - 1;
    console.log("lastIndex", lastIndex);
    
    let lastElem = digits[lastIndex];
    console.log("lastElem", lastElem);
    
    lastElem = lastElem + 1;
    console.log("lastElem added one", lastElem);
    
    if(lastElem==10){
        lastElem = 0;
        carryover = 1;
    }
    
    digits[lastIndex] = lastElem;
    
    console.log("array after adding one", digits);
    
    for(let i=0; i<digits.length;i++){
        console.log("Index", i , "value" , digits[i]);
    }
    
    for(let i=lastIndex-1; i>=0; i--){
        let temp = carryover + digits[i];
        if(temp == 10){
            digits[i] = 0;
            carryover = 1;
        }else{
            digits[i] = temp;
            carryover = 0;
        }
        
    }
    console.log("carryover", carryover)
    
      if(carryover == 1){
       digits.unshift(carryover)
      }else{
       //do nothing
          
      }   
          
    console.log("digits", digits)
    
    
    return digits;
     
    
};
