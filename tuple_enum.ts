// tuple -> 元组 -> 固定类型 + 长度的数组
const teacherInfo: [string, string, number] = ["toimc", "male", 18];

// enum -> 枚举 -> 罗列出所有可能的值 -> 常量
// 性别：男-1 male 女-0 female
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Gender {
  Male,
  Female,
}

console.log(Gender.Male);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[3]); // undefined

enum Direction1 {
  Up = 100,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up); // 100
console.log(Direction1.Down); // 101
console.log(Direction1.Left); // 102
console.log(Direction1.Right); // 103

console.log(Direction1[100]); // Up
