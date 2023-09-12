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
companies.forEach(function(company, index){
    console.log(company.start)
})
companies.forEach((company, index)=>(console.log(company.name)))

companies.forEach((company, index)=>{
    console.log(index)
})