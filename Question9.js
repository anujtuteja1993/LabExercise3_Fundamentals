let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep: function () { // shows the current step
        console.log(this.step);
        return this; //needed here too so we can chain all the functions
    }
};

ladder.up().up().up().down().showStep();

