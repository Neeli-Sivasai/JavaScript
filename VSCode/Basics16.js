let data = ["Navin", 5, {tech : 'JS'}, function() {
    console.log("Hello world")
}]

data[3]()

for(n of data){
    console.log(n)
}  


let a = [1,2,3,4]
let [,b,c,d] = a
console.log(b)
