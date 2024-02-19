// 基本的用法
function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);

const add1 = (x: number, y: number): number => {
  return x + y;
};

//  (x: number, y: number) => number 是函数类型
//  这种是匿名函数
//  var fn = function() {} -> const fn = () => {}  ,两者是等价的

// const add2 = (x,y) => x + y;
// 类型: (x: number, y: number) => number
const add2: (x: number, y: number) => number = (x: number, y: number): number =>
  x + y;

// 函数重载，只能用function定义，不能用箭头函数

function handleData(x: string): string[];
function handleData(x: number): number;

function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split(""); // ["1","2"]
  } else {
    return x.toString().split("").join("_");
  }
}

handleData("abc").join("_");
// handleData(123).join("_");  // error 提示string没有join方法
// handleData(false); // error 提示没有匹配的重载


// const handleData1:(x:string)=>string[]; // 这种方式是行不通的