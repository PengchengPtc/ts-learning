// 接口 -> ts最重要的概念->定义任意的结构或者类型

// interface Point {
//   x: number;
//   y: number;
//   a?: number;
// }

// interface Point1 {
//   x: number;
//   y: number;
// }
// // interface可以进行属性合并
// interface Point {
//   z: number;
// }

// const point: Point = {
//   x: 3,
//   y: 4,
//   z: 5,
// };

// 继承
interface publicPoint {
  x: number | string;
  y: number;
  z: number;
}

interface Point extends publicPoint, Point3 {
  a?: number;
}

interface Point1 extends publicPoint {
  b?: number;
}

interface Point3 {
  d: number;
}

const point: Point = {
  x: 3,
  y: 4,
  z: 5,
  d: 6,
};

const point1: Point1 = {
  x: "3",
  y: 4,
  z: 5,
};

// 函数的定义
interface Func {
  (x: number, y: number): number;
}
const addFunc: Func = (x, y) => x + y;

// 索引类型
interface RoleDic {
  [id: number]: string;
}

const role1: RoleDic = {
  0: "super_admin",
  1: "admin",
  5: "user",
};

const role2: RoleDic = ["super_admin", "admin", "user"]; // 这种方式也是可以的
// console.log(role2.length); // error
// 当定义了索引类型之后，数组的length属性就不能使用了，包括Array上原型链上的方法也不能使用了

// 绕开多余属性检查
interface MyType {
  color: string;
  // 2.字符串索引签名
  [prop: string]: any;
}

const getTypes = (myType: MyType) => {
  return `color is ${myType.color}`;
};

// getTypes({ color: "red", width: 100 }); // error 提示多余的属性，但是这个属性是我们需要的，所以需要绕开这个检查，用类型断言的方式

// 1.类型断言
getTypes({ color: "red", width: 100 } as MyType); // 这种方式是可以的，但是不推荐

getTypes({
  color: "red",
  width: 100,
  height: 100,
  a: (x: number) => x + 1,
});

// 3.类型兼容,不推荐
interface MyType1 {
  color: string;
}

// 只解构color属性
const getTypes1 = ({color}: MyType1) => {
  return `color is ${color}`;
};

const option = {color: 'red', width: 100, height: 100, a: (x: number) => x + 1}
getTypes1(option); // 这种方式也是可以的，但是不推荐
