let age=Symbol;

const userData={
    name:"Vikkky",
    email:"sbc@gmail.com",
    [age]:"28",
    "lastName":"sharma",
    address:"indore",
}
userData["lastName"]="joshi";

//via veriable

let gender="male";
userData["gender"]="male";

// console.log(userData);



//via key

// const extradata=function(){
//     ["school"]="IPS";
//     // home="yes";ss
//     // sex="male";
// }

// userData.extradata;


console.log(Object.keys(userData))
console.log(Object.values(userData))

// console.log(userData.hasOwnProperty('thulthul'));    