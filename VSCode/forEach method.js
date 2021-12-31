let nums = [1,2,3,4]

nums.forEach((n,i) => {
    console.log(n,i) // i is index here
})


t = () => {
    console.log("Hello world")
}

function na() {
    console.log("Hello Function")
}

t()
na()

filtered_nums = nums.filter(n => n%2==0)
filtered_nums.forEach((n) => {
    console.log(n)
})



 