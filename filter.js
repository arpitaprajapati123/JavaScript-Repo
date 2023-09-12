const companies = [
    {
        name:'google',
        start:2002,
        end:2034
    },
    {
        name:'paytm',
        start:2000,
        end:2029
    },
    {
        name:'flipcart',
        start:2020,
        end:2060
    },
    {
        name:'netflix',
        start:2006,
        end:2078
    },
    {
        name:'Uber',
        start:1990,
        end:2021
    },
    {
        name:'Amazon',
        start:2023,
        end:2074
    },

]
// const companiesData = companies.filter((company, index)=>{
//     return company.start > 2000
// })
// console.log(companiesData)

const companiesData = companies.filter((company, index)=>{
    if(company.start > 2000)
    return true;
})
console.log(companiesData)