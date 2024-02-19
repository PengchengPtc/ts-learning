// any -> es5 var ->  任意类型
let a: any;

a = 1;
a = "1";
a = true;

// void -> 没有类型
// never -> 永远不存在的值或者类型,主要用于流程控制6
// unknown -> 未知类型

let b: void;
// b = 123
// b = unknown
b = undefined; // 只有undefined可以赋值给void
// b = null
// b = void

let c: unknown;
c = 123;
c = "123";
c = true;
c = undefined;
c = null;

// unknown 与 any 的区别

a.toFixed(2); // 不会报错
// c.toFixed(2) // 会报错
a.join("_"); // 不会报错
// c.join('_') // 会报错
// unknown 类型不能直接调用方法，或者获取属性

if (typeof c === "string") {
  c.split("_");
} else if (typeof c === "object" && c instanceof Array) {
  c.push(1);
}
