const nums = [1, 2]

setTimeout((arg1, arg2) => {
    console.log(arg1, arg2)
}, 1000, ...nums)