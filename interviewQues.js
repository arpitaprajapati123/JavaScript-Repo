const companies = [
    {
        name:'google',
        category:'product based',
        start:2002,
        end:2034,
        isActive:true
    },
    {
        name:'paytm',
        category:'product based',
        start:2000,
        end:2029,
        isActive:false
    },
    {
        name:'flipcart',
        category:'product based',
        start:2020,
        end:2060,
        isActive:true
    },
    {
        name:'netflix',
        category:'product based',
        start:2006,
        end:2078,
        isActive:false
    },
    {
        name:'Uber',
        category:'product based',
        start:1990,
        end:2021,
        isActive:true
    },
    {
        name:'Amazon',
        category:'product based',
        start:2023,
        end:2074,
        isActive:false
    },
]

//Write code to get array of names from given array of users
//Get back only active users names
//Sort users by age descending

//------------Solution-1 Level-1---------------
const companyName1=[]
for(let i=0; i < companies.length; i++){
    if(companies[i].isActive){
        companyName1.push(companies[i].name)
    }   
}
console.log(companyName1)

//------------Ques.2- Solution-2 Level-2---------------
const companyName=[]
companies.forEach((company)=>{
    if(company.isActive)
    companyName.push(company.name)
})
console.log(companyName)

//------------Solution-3 Level-3---------------
const compName = companies.filter((company) => company.isActive).map((companies)=>companies.name)
console.log(compName)

//----------------------Ques.3- sort() -----------------
const sortedNames = companies.sort((c1, c2)=>{
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})
console.log(sortedNames)

//---------------------------------------------
companies.sort((comp1, comp2)=>comp1.start > comp2.start ? 1 : -1)
console.log(companies)

//----------------------method-2------------------
const compName2 = companies.filter((company) => company.isActive).sort((comp1, comp2)=>comp1.start > comp2.start ? 1 : -1).map((companies)=>companies)
console.log(compName2)