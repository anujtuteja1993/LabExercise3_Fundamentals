const prompt = require("prompt-sync")();

function Accumulator (startValue) {
        this.value = startValue; //instead of hardcoding it as 1
    
    this.read = function() {
        let input = prompt("Enter the value: ", 0);
        this.value+=parseInt(input);
    }
}

// function Accumulator(){
//     this.value = 1;
// }


let test = new Accumulator(1); // initial value 1
test.read(); // adds the user-entered value
test.read(); // adds the user-entered value
console.log(test.value); // shows the sum of these values