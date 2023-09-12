//=---------------------------------Shallow copy----------------------------------------
// let obj = {
//     name:'Arpita'
// }
// // let user=Object.assign({}, obj);
// let user = {...obj};

// user.name='Arpita Prajapati'
// console.warn(obj);
// console.warn(user);

//------------------------------Deep copy----------------------------------------------
let obj ={
    name:'Arpita',
    address:{
        city:'Noida',
        pincode:284003
    },
    getData:function(){
        return "What meant to be will be!!!"
    }
}
// let user = JSON.parse(JSON.stringify(obj));
let user = _.cloneDeep(obj);
user.address.city = 'Gurgaon';
console.warn(obj);
console.warn(user);