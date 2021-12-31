let a = []

a = [1,2,3,4]

a.push(5)
console.log("After pushing :",a)


a.shift()
console.log("After shifting",a)

a.unshift(0)
console.log("After unshifting",a)

a.pop()
console.log("After Pop",a)


console.log(a.splice(2,2))
