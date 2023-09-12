const companies = [
    {
        name:'google',
        category:'product based',
        start:2002,
        end:2034
    },
    {
        name:'paytm',
        category:'product based',
        start:2000,
        end:2029
    },
    {
        name:'flipcart',
        category:'product based',
        start:2020,
        end:2060
    },
    {
        name:'netflix',
        category:'product based',
        start:2006,
        end:2078
    },
    {
        name:'Uber',
        category:'product based',
        start:1990,
        end:2021
    },
    {
        name:'Amazon',
        category:'product based',
        start:2023,
        end:2074
    },
]

const arr = [3, 2, 89, 45, 33, 55, 12, 34, 67, 90, 78]

// const sortedData = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// })

const sortedData = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)
console.log(sortedData)

const sortedArr = arr.sort((a, b)=>(a - b))
console.log(sortedArr)

