//x++ vs ++x or i++ vs ++i
console.log("first");
console.log("second");
let seconds = 0;
const intervalId = setInterval(() =>{
    // seconds++
    console.log(++seconds);
    if(seconds === 10){
        clearInterval(intervalId);
    }
},500)
console.log("fourth");
console.log("fith");

