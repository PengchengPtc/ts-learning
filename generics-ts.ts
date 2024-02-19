// const pushArr = (arr: string[], item: string): string[] => {
//   arr.push(item);
//   return arr;
// };

// const pushNumArr = (arr: number[], item: number): number[] => {
//   arr.push(item);
//   return arr;
// };

const pushArr = <T>(arr: T[], item: T): T[] => {
  arr.push(item);
  return arr;
};

pushArr<string>(["1"], "2");
pushArr<number>([1], 2);
// pushArr<number>([1], "2"); // error 提示类型不匹配

function swapGeneric<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result1 = swapGeneric<string, number>(["string", 123]);
