let userDetails = {
    name:'Arpita Prajapati',
    Age:20,
    Designation:'Web developer',
    printDetails:function(city, country, phn){
        console.log(this.name + " " + city+" "+country+" "+phn)
    }
}
userDetails.printDetails()

let userDetails2 = {
    name:'John Joseph',
    Designation:'Sr. Web developer',

}
//function borrowing
userDetails.printDetails.call(userDetails2)

//when function is outside of the object!
let printDetails = function(city, add, pincode){
    console.log("user name is: " +this.name+" " + " accomodate in city: " + city + " address: " + add + " pincode: " + pincode)
}
//call()
printDetails.call(userDetails2, "Jhansi", "prem ganj", 284003)
printDetails.call(userDetails, "Delhi")

//apply()
userDetails.printDetails.apply(userDetails2, ["Paris", "France", 23842384])

//bind()
const newFun = printDetails.bind(userDetails2, "Noida", "ABC", 201305) 
newFun()
