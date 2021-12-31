let words = "My name is Naveen Reddy Telusko".split(' ');

console.log(words)

let [a,b,c,d,e] = words
console.log(d,e)

[a,b,,..d] = words
console.log(d)