// console.log("abc");

// let nationality = "VNch";
// let text = "qwe qweio qwe qfqkfnk q tnbvkqw fqwd qưlkdjqwl";
// let prefix = "toi la: ";
// let myName = "HieuNT";
// let myAge = 20;
// let myBool = true;
// let myNumber = "20";
// let Newstring = prefix + myName + myAge ;
// let Newstring2 = `${prefix}@${myName}@${myAge}`
// console.log("------------------------");
// console.log(Newstring.length);
// console.log(Newstring2);
// console.log("------------------------");
// console.log(nationality == country);
// console.log(myAge == myNumber);
// console.log(myAge === myNumber);


// console.log(text.split(" "));

// const canh = 10;
// for (let i = 0; i < canh; i++) {
//      for (let j = 0; j < canh; j++) {
//           console.log("*");     
//      }

      
// }



// giai thừa
 
// let n=5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//      result *= i
     
// }

// console.log("gia thua cua 5 :",result);


// let drinks = ["Americano", "Expresso ", "Bac xiu"];


// let food = [];

// food[]
// food[0] = "Apple";
// food[1] = "Beef";
// food[2] = "pork";
// food[3] = "fruit";

// let nums = [1,2,123,154,754,-123]
// console.log(food[0]);

// for(let i = 0; i<4; i++){
//      console.log(food[i].toUpperCase())
// } show phần tử của mảng

// for(let i = 0; i<4; i++){
//      food[i] = undefined

// food.unshift("Americano");
// // food.pop();
// food.splice(1,0)
// console.log(food.join(""));

// let person = {
//      brand: "Toyota",
//      speed: "200km/h",
//      year: "2022",    
//      year: "2023" ,   
//      year: "2025"    
// };

// console.log(Object.entries(person))


// let gpa = prompt("nhap gia tri");
// gpa = Number(gpa);

// if (gpa <=10 && gpa >=0) {
//      if (gpa < 10 && gpa >=8) {
//           alert(`${gpa} dat danh hieu hsg`);
//      } else if (gpa < 8 && gpa >= 6.5) {
//           alert(`${gpa} dat danh hieu hsk`);
//      } else if (gpa < 6.5 && gpa >= 4.5) {
//           alert(`${gpa} dat danh hieu hstt`);
//      } else {
//           alert(`${gpa} dat danh hieu hsy`);
           
//      }
// } else {
//      alert("nhap lai di may");
// }

// let n = 10;
// let sum = 0
 
// for (let i = 2;i <= n;i++) {
//     for (let j = 0 ;j < i ; j++)
//      console.log(j);
       
//   }

function logArray(arr){
    for(let i = 0 ;i< arr.length ;i++){
        console.log(arr[i ]);
    }
}

let foods = ["Apple","Orange" ,"Jack fruit"];

logArray([]);

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multi(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}


const sum = sub(5, 10);

console.log(sum);
 