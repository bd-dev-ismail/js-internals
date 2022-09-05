function doSomething (){
    console.log('third');
}
console.log('first');
console.log('second')
setTimeout(doSomething);
setTimeout(()=>{
    console.log('hello');
},5000)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log('4th');
console.log('5th');