
let a = {   name: 'Sivasai',
            tech : 'Artificial Intelligence',
            laptop : {
                cpu : 'I7',
                ram : '8GB',
                brand : 'Lenovo',
                    }
        }

console.log(a['tech']) 
console.log(a.laptop.cpu)

console.log("Before delete\n", a)
delete a.laptop

console.log("After delete\n", a)