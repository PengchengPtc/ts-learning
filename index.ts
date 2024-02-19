// 基础内容
// boolean，number,string,symbol,null和undefined
// 对象类型 {} or object,[] or array,function,class类型
// {}，[]是字面量，object，array是构造函数

//  boolean，number,string,symbol,null和undefined是基础类型
//  object和array是引用类型

// string
const msg: string = "Hello World";

let msg1: string = "Hello World";
msg1 = "Hello TypeScript";

const msgStr = `${msg1} ${msg}`;
console.log(msgStr);
console.log(msg);

// boolean
const isLoading: boolean = false;

// object
const obj: object = {};
const obj1: {} = {};
// 可选属性，一定要是在必选属性后面
const obj2: { name: string; age: number } = { name: "zhangSan", age: 18 };
const obj3: { name: string; age?: number } = { name: "zhangSan" };

obj3.age = 18;
obj3.age = undefined;
console.log(obj3.age);

const arr: [] = [];
// 构造函数方法
const arr1: Array<number> = [1, 2, 3];
const arr2: Array<string | number> = [1, 2, 3, "2"];
// 字面量方法
const arr3: string[] = ["1", "2", "3"];
const arr4: (number | string)[] = [1, 2, 3, "2"];
const arr5: [string, string, string] = ["1", "2", "3"];


// Object vs {} vs object


// 1.{}与Object的类型相同，可以赋值包括字符串,数组等
// 2.object相当于{[key:string]:any}，不能分配原始类型
// 3.{[key:string]:any}最具体，不能分配原始类型 + 数组 + 非字符串对象


// {[key: string]: any} 是 TypeScript 中表示具有字符串键的任意类型值的对象的类型定义。这意味着你可以使用任何字符串作为键，并且该键对应的值可以是任意类型