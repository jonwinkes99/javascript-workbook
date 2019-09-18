let fruit1 = {
    name: "apple",
    possiblecolors: ["red", "yellow", "green"],
    size: "medium",
    singleSeed: false

}

let fruit2 = {
    name: "peach",
    possiblecolors: ["yellow", "orange", "peach"],
    size: "medium",
    singleSeed: true
}

let fruit3 = {
    name: "Watermelon",
    possiblecolors: ["green"],
    size: "large",
    singleSeed: false
}

let myFruit = [];
myFruit.push(fruit1);
myFruit.push(fruit2);
myFruit.push(fruit3);

//console.log("I have "+myFruit.length+" fruits defined");



function printDescription(myFruit){
let seedSubstring = "";
if(myFruit.singleSeed){
    seedSubstring = "with a single seed";
} else {
    seedSubstring = "with many seeds"
}


console.log("The "+myFruit.name+" is a "+myFruit.size+" sized fruit "+seedSubstring+".")


}

printDescription(fruit1)
printDescription(fruit2)
printDescription(fruit3)