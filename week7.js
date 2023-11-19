//Array called ages
let ages = [3,9,23,64,2,8,28,93];
console.log(ages[ages.length -1]-ages[0]);
// print the value of the last element minus teh first element.
ages.push(75);
//pushed the new value into the array.
console.log(ages[ages.length -1]-ages[0]);
//proof this was correct it should return 72
//create an empty array to add all my values into
let myArray= 0;
//loop through my array and add the ages together
for (newAges of ages ){
    myArray+=newAges;
}
console.log(myArray/ages.length);// value should be 33.888888


let names = ['Sam','Tim','Sally','Buck','Bob'];
//set the empty variable
let avgNames = 0;
//loop through my array and add the length of each name to the variable avgNames.
for(myName of names){
    avgNames +=myName.length;
}
//get the average.
console.log(avgNames/names.length);

//concatenate the names.
let conNames='';
for (myName of names){
    conNames+=myName+" ";
}
//output the results.
console.log(conNames);

//Question 3: You access the last element of an array by myArray[myArray-1];
//Question 4: You access the first element of an array by myArray[0];
//Number 5:
//set the empty array
let nameLengths=[];
//for loop will go through the names array and push the length into the nameLengths array.
for(myName of names){
    nameLengths.push(myName.length);
}
// Number 6:
//set the totalVal to 0
let totalVal = 0;
//loop through the nameLengths array and add the together in the totalVal variable.
for(totalLength of nameLengths){
    totalVal += totalLength;
}
//console log runs and prints the value.
console.log(totalVal);
// Number 7:
//set the variable as a empty string
let concated = '';
//pass two values of word and n
let myFunction = (word, n) => {
    //loop through. you can use the for of loop because the value is 3; you don't have 3 items. you will then add the word to the
    //string variable the value of n times.
    for(let i =0;i<n;i++){
        concated += word;
    }
    return concated;
}
//run and print the function.
console.log(myFunction('Hello',3));

//Number 8:
//simple function that passes the first and last name through and joins them.
let putNameTogether = (firstName,lastName) => {return `${firstName} ${lastName}`}; 
console.log(putNameTogether('John', 'Paul'));
    

// Number 9:

let isItBig = thisArray=>{
    // set the variable to empty
    let someNumbers =0;
    //loop through it and add the numbers together using the for of loop.
    for(thatArray of thisArray){
        someNumbers += thatArray;
    }
    //if the variable is greater than 100 it is true and if not it is false.
    return (someNumbers>100)? true : false;
} 
//run and print the function.
console.log(isItBig([20,40,55,65]));

//Number 10:
let whatAvg = avgArray=>{
    // set the variable to 0, then using the for of loop add them together. then when you return the someNumbers array
    // you divide it by the length of the original avgArray and that gives you the average.
    
    let someNumbers=0;
    for(thisAvg of avgArray){
        someNumbers+=thisAvg;
    }
    return someNumbers/avgArray.length;
}
//run and print the function
console.log(whatAvg([2,5,9,12,21,67]));

//Number 11:

let avgOfArray = (arrayOne,arrayTwo)=>{
    //set two empty variables
    let avgOfOne = 0;
    let avgOfTwo = 0;
    //loop through the first array that was passed through the arguments
    for(arrayFirst of arrayOne){
        avgOfOne +=arrayFirst;
    }
    //loop through the second array that was passed through the arguments.
    for(arraySecond of arrayTwo){
        avgOfTwo +=arraySecond;
    }
    //doing the same as abouve average both of the  and if the first on is greater than the second return true, else return false.
    return (avgOfOne/arrayOne.length>avgOfTwo/arrayTwo.length)?true:false;
}
//print and run the function.
console.log(avgOfArray([2,3,6,7],[2,1,5]));


//Number 12:
//write the function takeing the 2 arguments.
let willBuyDrink= (isHotOutside,moneyInPocket)=>{
    //simply check that the statements are corect and if they are pass true, else pass false.
    return (isHotOutside===true && moneyInPocket>10.50)?true:false;
}
//run and print the function.
console.log(willBuyDrink(true,11.00));