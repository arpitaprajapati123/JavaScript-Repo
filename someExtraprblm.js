// const getTwoSum = (arr) =>{
//     let targetArr = [];
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//             sum = arr[i]+arr[j];
//             if(sum==9){
//                 targetArr.push(i);
//                 targetArr.push(j);
//             }
//         }
//         return targetArr;
//     }
// }
// let nums = [2, 7, 11, 15];
// console.log(getTwoSum(nums));
// const getIndices = (nums, target)=>{
//     var map={};
//     for(let i=0;i<nums.length;i++){
//         let value = nums[i];
//         let complimentedArry = target - value;
//         if(map[complimentedArry] !== undefined){
//             return [map[complimentedArry], i];
//         }else{
//             map[value]=i;
//         }
//     }
// }

// let nums = [1, 5, 9];
// let target = 10;                                
// console.log(getIndices(nums, target));

//----------------------------------------------------------------------------------
let str = "have a nice day";
if(str.includes("have")){
    console.log("string contains that particular workd");
}else{
    console.log("string does not contain same");
}