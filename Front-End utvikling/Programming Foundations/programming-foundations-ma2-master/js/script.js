//QUESTION 1

var pets = [
    {
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    },
];

for (var i = 0; i < pets.length; i++){

    var pet = pets[i];
    var petAge = pet.age;
    var petType = pet.type;

    if (petAge >= 4){
        console.log(petType)
    }

}


//QUESTION 2

function booleanTester(myArgument) {
    if(typeof myArgument === "boolean") {
        console.log(myArgument)
    } else{
        console.log("Please pass a boolean value in")
    }
}

booleanTester("not boolean")


//QUESTION 3

var subHeading = document.querySelector("h2");
var button = document.querySelector("button");

function updateHeadingColorAndText(){
    subHeading.innerHTML = "Updated subheading";
    subHeading.style.color = "blue";
}

button.onclick = updateHeadingColorAndText