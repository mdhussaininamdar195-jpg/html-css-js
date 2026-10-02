//1. Check whether a number is positive or negative.
// function numcheck(){
//     let num=-1;
//     if(num<0){
//         console.log(`${num} is a negative`)
//     }
//     else if(num===0){
//          console.log(`${num} zero is neutral`)
        
//     }
//     else{
//         console.log(`${num} is a positive`)
//     }
// }
// numcheck()


//2. Check whether a number is even or odd.
//  function oddeven(){
//     let num=1;
//     if(num%2===0){
//         console.log(`${num} is even`)
//     }
//     else{
//         console.log(`${num} is odd`)
//     }
//  }
//  oddeven()

// 3. Check whether a person is eligible to vote.
 function Adult(){
    let age=20;
    if(age>=18){
        console.log("eligible to Vote")
    }
    else if(age<=0){
        console.log("invalid age")
    }
    else{
        console.log(" not eligible to Vote")
    }
 }
Adult()