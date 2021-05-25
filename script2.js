//original method

var displayDiv = document.querySelector("#display");
var operator;
var numArray = [];
var equation;
var first;
var second;
var setOperator;


//clears screen and sets to 0
function clr(){
    displayDiv.innerText = "0";
    numArray=[];
    first = 'reset';
    console.log(first,second)
    operator = undefined;
}

//used an array to set the variables in the calculator. last num in array will be the variable.
function press(number){
    if (operator == undefined){
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
    }
    console.log(numArray)
    return numArray;
}


function setOP(element){
    operator = element;

    if (numArray.length<1){
        displayDiv.innerText = 'NaN';
    }

    if (first == null || first == 'reset'){
        console.log('do you read this')
        first = Number(numArray[numArray.length-1]);
        displayDiv.innerText = first;
        console.log(first)
        numArray=[];
        }
    else if (second == null && first != null){
        second = Number(numArray[numArray.length-1]);
        displayDiv.innerText = second;
        numArray=[];
        console.log(second)
        }
    

    if (setOperator == '/'){
        first = (first / second);
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    else if (setOperator == '*'){
        first = (first * second);
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    else if (setOperator == '-'){
        first = (first - second);
        console.log('testing when read')
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    else if (setOperator == '+'){
        first = first + second;
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    
    displayDiv.innerText = first;
    
    setOperator = operator;
    operator = undefined;
    second=null;
}


function calculate(){
    if (second == null){
        second = Number(numArray[numArray.length-1]);
        displayDiv.innerText = second;
        numArray=[];
        console.log(second)
    }

    if (setOperator == '/'){
        first = (first / second);
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    else if (setOperator == '*'){
        first = (first * second);
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    else if (setOperator == '-'){
        first = (first - second);
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    else if (setOperator == '+'){
        first = (first + second);
        console.log (typeof first, typeof second)
        console.log (first, second)
        displayDiv.innerText = first;
    }
    displayDiv.innerText = first;
    second = null;
    return first;
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
