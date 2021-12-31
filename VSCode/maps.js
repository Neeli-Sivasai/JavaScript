let a = new Map()

a.set("Navin", "Reddy")
a.set("Neeli", "Sivasai")
console.log(a)

//console.log(a.has("Navin"))
//console.log(a.get("Neeli"))

 

for (let [key, v] of a){
    console.log(key, " : ",v)
}


a.forEach((v,k) => {
    console.log("Key : ",k, "Value : ",v)
     

})