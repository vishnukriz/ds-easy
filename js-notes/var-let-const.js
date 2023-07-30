var a = "var global";

function blocks {
    
    //var a = "var function";
    
    if(true){
      //  var a = "var block";
        let b = "let block";
        
        console.log("block a", a);
        console.log("block b", b);
    }
    
    console.log("function a", a);
    console.log("function b", b);
    
};

blocks();

console.log("global a", a);
//console.log("global b", b);


/**

var a = 1;
    var a = 2;
    
    console.log(a);
    
    let b = 1;
    b = 4;
    
    let c; //declaration
    c = 4; //definition
    
    console.log(b);
    
**/
