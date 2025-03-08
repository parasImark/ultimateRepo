console.log("welcome to tut7");


let arr = [34, 44, 55, 66, 65, 85, 4, 66];
arr[0] = 45;


console.log(arr.slice(2, 5));
//  arr.splice(2,5);
console.log(arr);




let myObj = {
    "name": "harry",
    place: "Delhi",
    isActive: true
}


console.log(myObj.name);
console.log(myObj.place);
console.log(myObj["place"]);










let age = [33, 55, 67, 18,66];
// let s_age = age.sort();
console.log(age);


for(let i=0; i<age.length;i++){
    if((age[i]-(age[i+1]))<0){
        console.log(age[i]=age[i]);
    }else{
        console.log(age[i]=age[i+1]);
    };
};



// 33-55<0

// 33

// 55





// let age = [33, 55, 67, 18, 66];

// for (let i = 0; i < age.length - 1; i++) { // Prevent out-of-bounds access
//     if (age[i] < age[i + 1]) {
//         console.log(`Value kept: ${age[i]}`);
//     } else {
//         age[i] = age[i + 1]; // Replace with the next value if the condition fails
//         console.log(`Value updated: ${age[i]}`);
//     }
// }

// console.log("Modified Array:", age);
