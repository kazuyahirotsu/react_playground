var val1 = "1";
console.log(val1);

val1 = "2";
console.log(val1);

var val1 = "3";
console.log(val1);

const name = "April";
const age = 20;
const message = `I'm ${name} and ${age} years old`;
console.log(message);

const func1 = (value) =>{
    return value;
}
console.log(func1("hi"));

const func2 = (value1, value2) => value1+value2;
console.log(func2(1,2));

const myProfile = {
    name: "Brian",
    age:21
};
const {age:newage, name:newname} = myProfile;
console.log(`I'm ${newname} and ${newage} years old`);

const myProfile2 = ["Chris", 22];
const [newnewname,newnewage] = myProfile2;
console.log(`I'm ${newnewname} and ${newnewage} years old`);

const sayHello = (name="Guest") => console.log(`Hello, ${name}`);
sayHello();
sayHello("Don");
const {point = 0} = myProfile;
console.log(`You have ${point} points`);

const arr1 = [1,2];
console.log(...arr1);
const sum = (num1,num2)=>console.log(num1+num2);
sum(...arr1);

const arr2= [3,4];
const arr3 = [...arr1, ...arr2];
console.log();

const name3 = "Ellen";
const age3 = "23";
const user = {
    name3,
    age3,
};
console.log(user);

arr1.map((value)=>console.log(value));
arr4 = [1,2,3,4,5];
arr5 = arr4.filter((num)=>{
    return num % 2 === 1;
});
console.log(arr5);

const val2 = 1>0?"true":"false";
console.log(val2);