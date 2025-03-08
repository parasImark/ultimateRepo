console.log("welcome to tut 6");



let str = "you are ";

let newStr = str.concat(9 ," this class") ;

console.log(newStr);




let demo = "you are a student" ;

console.log(demo.charAt(5));




let str1="Hi, my name is Sam!";
let str2 = str1.indexOf("name");
console.log(str2);





var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));





var text="programming is an art"
var mystr= text.slice(6)
console.log(mystr)





var txt = "a,b,c,d,e";   
txt.split(",");
// txt.split("");

console.log(txt);



let html = "this is an h1 tag" ;
// html = html.slice(2,6).toUpperCase();
// console.log(html);
// html = html.slice(2,6).toLowerCase();

// console.log(html[1]);
// console.log(html);



console.log(html.split("i"));
console.log(html.split(" "));





// Template literals


let fruit1 = "apple";
let fruit2 = "orange";
let name = 'harry';

document.body.innerHTML= (`your name is ${name} 
    
<h1>he likes ${fruit1} and ${fruit2}</h1>

    `)

