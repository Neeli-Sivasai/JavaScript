nums = [1,2,3,4,5,6,7,8,9]

console.log(nums.filter(n => n%2 == 0))


let a = new Set("Hello")
console.log(a)
a.add("World")
console.log(a)

a.forEach(n => {
    console.log(n)
})

console.log(a.has('o'))