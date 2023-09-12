const total=0;
const arr = [3, 2, 89, 45, 33, 55, 12, 34, 67, 90, 78]

const sumage = arr.reduce(function(total, age){
    return total+age;
}, 0)
console.log(sumage)

const sumage1 = arr.reduce((total, age)=> total+age, 0)
console.log(sumage)