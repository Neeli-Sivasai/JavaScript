// function in object

let laptop = {
    cpu : 'I7',
    ram : '8GB',
    brand : 'HP',

    greet : function() {  // function in objects called as methods
        console.log(this.cpu) // this calls the variable in the same object
        console.log('Hi')
    }
}

laptop.greet()


 