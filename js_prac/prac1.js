//create an array of 10 numbers
let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr)

// filter even numbers
console.log(arr.filter(e=>{
    if(e%2===0){
    return e;
    }
}))


// // //double them using map
console.log(arr.map(e=>{
     return e*2;
}))

// // //calculate thier sum using reduce
console.log(arr.reduce((a,b)=>{
     return a+b;
}))


// //create async function
async function JsAsync(){
    console.log("hello world")
}
async function main(){
    await JsAsync()
}
main()
