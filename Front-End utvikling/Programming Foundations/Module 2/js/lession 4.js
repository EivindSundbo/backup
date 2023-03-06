//QUESTION 1
function text(){
    console.log("what the func is this nonsense?")
}

text();

//QUESTION 2

function fullName(firstName, lastName){
    var  sum = firstName + " " + lastName;
    console.log(sum);
}

fullName("Eivind", "Sundbø")

//QUESTION 3

function multiply(firstNumber, secondNumber){
    
    var typeOfFirst = typeof firstNumber;
    var typeOfSecond = typeof secondNumber;

    if(typeOfFirst !== "number" || typeOfSecond !== "number"){
        return("Please supply number values")
    }

    return firstNumber * secondNumber;


}
    var result = multiply(3, 5);
        console.log(result);

//QUESTION 4

function addition(num1, num2, num3) {
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);
    var convertedNum3 = parseFloat(num3);

    if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)){
        return "Invalid argument types"
    }

    return convertedNum1 + convertedNum2 + convertedNum3;
}

 var paragraph = document.querySelector("p");

 var sum = addition(6, true, "f");

 paragraph.innerHTML = sum

//QUESTION 5

var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML = heading.innerHTML + ": Updated";
}

//QUESTION 6

var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

//QUESTION 7

var redButton = document.querySelector(".red")
var orangeButton = document.querySelector(".orange")
var pinkButton = document.querySelector(".pink")

function changeBackground(color){
    document.body.style.backgroundColor = color;
}

redButton.onclick = function(){
    changeBackground("red")
}

orangeButton.onclick = function(){
    changeBackground("orange")
}

pinkButton.onclick = function(){
    changeBackground("pink")
}