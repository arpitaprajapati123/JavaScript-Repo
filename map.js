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
const mapData = companies.map((company, index)=>{
    return `${company.name} - ${company.category}`
})
console.log(mapData)

//------------interview question--------------
const compNames = companies.map((company, index)=>{
    return company.name;
})
console.log(compNames)