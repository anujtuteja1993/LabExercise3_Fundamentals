let Accumulator = {
    value: 0,
    Accumulator(){
        this.value = 1;
    },
    read(val){
        prompt("Enter the value: ", input);
        this.value+=input;
    }
}

// function Accumulator(){
//     this.value = 1;
// }


let test = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values