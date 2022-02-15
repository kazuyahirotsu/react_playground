let str: string = "A";
str = "10"

let num: number = 0;
num = 10

let bool: boolean = true;
bool = false;

const arr1: Array<number> = [0,1,2];
let arr2: number[] = [0,1,2];
arr1.push(10);
arr2.push(10);
console.log(arr1);

let null1: null = null;
null1 = null;

let undefined1: undefined = undefined;
undefined1 = undefined;

let any1: any;
any1 = false;
any1 = 10;
any1 = undefined;

const funcA = (num: number): void => {
    console.log(num);
};
funcA(10);

const obj: {str:string, num:number} = {
    str: "A",
    num: 10,
};
obj.str = "B"
obj.num = 20

const obj2: { str:string } & { num:number } = {
    str: "A",
    num: 10,
};
obj2.str = "20"

type TypeA = {
    str: string;
    num: number;
}
type TypeB = {
    str: string;
    bool: boolean;
}
type TypeC = TypeA & TypeB;

const obj1: TypeC = {
    str: "A",
    num: 10,
    bool: false,
};

let val1: string | number = "";
val1 = "A";
val1 = 10;

type CustomType<T> = {
    val: T;
}
const strObj: CustomType<string> = {val: "A"};

