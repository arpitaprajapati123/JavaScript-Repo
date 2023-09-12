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
//--------------------------Ques-1: Check if user with such name exists-------------------------
//-----------level-0 soln----------------

const isNameExist = (companies, name) => {
    let exist = false;
    for(let i=0;i<companies.length;i++){
        if(companies[i].name === name){
            exist = true;
        }
    }
    return exist
}
const result = isNameExist(companies, "google")
console.log(result)

//----------level-1 soln------------------
const isNameExist2=(name, companies)=>{
    const user = companies.find((user)=>user.name === name)   
    return Boolean(user)
}
console.log(isNameExist2("google", companies))

//----------level-2 soln-----------------
const isNameExist3=(name, companies)=>{
    const userIndex = companies.findIndex((user)=>user.name === name)
    // console.log(userIndex)
    return userIndex >= 0
}
console.log(isNameExist3("google", companies))

//-----------level-3 soln----------------
//----------some()-----------
const isNameExist4 = (name, companies) => {
    const user = companies.some((user)=>user.name === name)
    return user;
}
console.log(isNameExist4("Amazon", companies))

//------------------------------Question-2 Adding elements in an Array-------------------------------
//-------push()---------
// let arr=[2,3,4]
// const append = (arr, element)=>{
//    arr.push(element)
//    return arr;
// }
// const extendedArr = append(arr, 23)
// console.log(extendedArr)

// console.log(arr)

//-------spread operator---
let arr=[2,3,4]
const append = (arr, element)=>{
  return [...arr, element]
}
const extendedArr = append(arr, 23)
console.log(extendedArr)

console.log(arr)

//-----------------------Additional question-------------------------------------------
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },2000)
// }

//---------------------------Remove duplicate from an array------------------------------------
//-------------Level-0-------------
let arr2 = [1, 2, 3, 2, 3, 5, 4, 4]
const removeDuplicates=()=>{
    
    let uniqueSetArray=[]
    arr2.forEach((element)=>{
        if(!uniqueSetArray.includes(element)){
            uniqueSetArray.push(element)
        }
    })
    return uniqueSetArray
}
console.log(removeDuplicates(arr2))

//-----------Level-1--------------
const setArr = [1, 2, 4, 4, 3, 2, 6, 5]
const removeDuplicatesFunction = (setArr)=>{
    return [...new Set(setArr)]
}
const uniqueElements = removeDuplicatesFunction(setArr)
console.log(uniqueElements)
console.log(setArr)

//-----------Level-2----------------
const reduceArray = [3, 3, 5, 5, 6, 6, 7, 8]
const uniqueArray= (reduceArray)=>{
    return reduceArray.reduce((acc, element)=>{
        return acc.includes(element) ? acc : [...acc, element] ;
    },[])
}
console.log(uniqueArray(reduceArray))

//------------------------------------------Question-4 Concatenation of an Array---------------------------
//----------Level-0---------
// const concateArray = (arr1, arr2)=>{
//    arr1.push(...arr2)
//     return arr1;
// }
// const array1=[3, 4, 2, 5, 6]
// const array2=[5, 6, 3, 2, 4]
// const resultantArr = concateArray(array1, array2)
// console.log(resultantArr)

//--------Level-1---------
// const concateArray = (arr1, arr2)=>{
//    return [...arr1, ...arr2]
//  }
//  const array1=[3, 4, 2, 5, 6]
//  const array2=[5, 6, 3, 2, 4]
//  const resultantArr = concateArray(array1, array2)
//  console.log(resultantArr)

 //--------Level-2----------
 const concateArray = (arr1, arr2)=>{
    return arr1.concat(arr2)    
  }
  const array1=[3, 4, 2, 5, 6]
  const array2=[5, 6, 3, 2, 4]
  const resultantArr = concateArray(array1, array2)
  console.log(resultantArr) 

// const toConcateArr1 = [ 2, 3, 5, 6, 9]
// const toConcateArr2 = [7, 8, 3, 5, 2]
// console.log(toConcateArr1.concat(toConcateArr2))
// console.log(toConcateArr1, toConcateArr2)

