var displayDiv = document.querySelector("#display");
var operator;
var numArray = [];
var equation;
var first;
var second;
var operator;

//currently only does one round of math. can't do 6*2+1-3. Have to do 6*2= 12 +1=13-3=10. Working to improve.

//clears screen and sets to 0
function clr(){
    displayDiv.innerText = "0";
    numArray=[];
    first = 'reset';
    second = null;
    operator = undefined;
}

//used an array to set the variables in the calculator. last num in array will be the variable.
function press(number){
    if (displayDiv.innerText === "0" || displayDiv.innerText == first){
        var firstNum = number;
        displayDiv.innerText = firstNum;
        numArray.push(displayDiv.innerText);
    }
    else {
        var nextNum = number;
        displayDiv.innerText = displayDiv.innerText + nextNum;
        numArray.push(displayDiv.innerText)
    }
    console.log(numArray, first, second)
}



function setOP(element){
    operator = element;
    // toUse = {
    //     plus: function (first,second){return first + second},
    //     minus: function (first, second){return first -second},
    //     mult: function(first, second){return first * second},
    //     divide: function(first, second){return first/second}
    // }
    if (first == null || first == 'reset'){
        first = Number(numArray[numArray.length-1]);
        displayDiv.innerText = first;
        numArray = [];
    }
    // else if (second == null){
    //     second = Number(numArray[numArray.length-1]);
    //     displayDiv.innerText = second;
    //     numArray=[];
    // }
    // if (operator == '+'){
    //     toUse.plus(first,second);
    // }
    // else if (operator == '-'){
    //     toUse.minus(first,second);
    // }
    // else if (operator == '*'){
    //     toUse.mult(first, second);
    // }
    // else if (operator == '/'){
    //     toUse.divide(first, second);
    // }
    displayDiv.innerText = first;
    second = null;
}


function calculate(){
    second = Number(numArray[numArray.length-1]);
    displayDiv.innerText = second;
    first = eval(`${first} ${operator} ${second}`); 
    displayDiv.innerText = first;
    second = null;
    numArray=[];
}





// function setOP(element){
//     operator = element;
//     if (first == null){
//         first = numArray[numArray.length-1];
//         console.log(first + 'first')
//         }
//     displayDiv.innerText = "";
//     setOperator = operator;
//     operator = undefined;
//     return operator;
// }



// function calculate(){
//     if (second == null){
//         second = numArray[numArray.length-1];
//     }
//     Number(first);
//     Number(second);
//     if (setOperator == '/'){
//         solution = (first / second);
//     }
//     else if (setOperator == '*'){
//         solution = (first * second);
//     }
//     else if (setOperator == '-'){
//         solution = (first - second);
//     }
//     else if (setOperator == '+'){
//         solution = (first + second);
//     }
//     displayDiv.innerText = solution;
//     first = solution;
// }





//sets variables in equation
// function press(number){
//     if (operator == undefined){
//         if (displayDiv.innerText === "0" || displayDiv.innerText == ""){
//             var firstNum = number;
//             displayDiv.innerText = firstNum;
//             numArray.push(displayDiv.innerText);
//         }
//         else {
//             var nextNum = number;
//             displayDiv.innerText = displayDiv.innerText + nextNum;
//             numArray.push(displayDiv.innerText)
//         }
//     }
//     return numArray;
// }

// //Math section, defines operators and variables
// function setOP(element){
//     operator = element;
//     console.log(solution)
//     if (numArray.length>0){
//         if (first == null){
//             first = numArray[numArray.length-1];
//             first = Number(first)
//             console.log(first)
//         }
//         else if (second == null){
//             second = numArray[numArray.length-1]
//             second = Number(second)
//             console.log(second)
//         }
//         displayDiv.innerText = "";
//     }

//     setOperator = operator;
//     if (setOperator == '/'){
//         solution = first / second;
//     }
//     else if (setOperator == '*'){
//         solution = first * second;
//     }
//     else if (setOperator == '-'){
//         solution = first - second;
//         console.log(solution, first, second);
//     }
//     else if (setOperator == '+'){
//         solution = first + second;
//     }
//     first = solution;
//     operator = undefined;
//     second = null;
//     return operator;
// }
