class Person {
  // public - 公共的
  // protected - 允许在类内及继承的子类中使用
  // private - 只允许在类内使用

  name = "zhangSan"; // 默认public

  private age = 18;
  protected name1 = "tomic1";
  getName() {
    return this.name;
  }
}

const person = new Person();
console.log(person.name);
console.log(person.getName()); // 直接用console.log(person.age)会报错，因为age是private的

// 继承
class Person1 extends Person {
  getAge() {
    return "new data";
  }
}
const person1 = new Person1();
console.log(person1.getName());

// 构造函数
class Person2 extends Person {
  // 在new的时候会自动调用构造函数
  constructor(public name: string) {
    super(); // 调用父类的构造函数，必须要有，因为只有有了父类，才能有子类
    console.log(super.getName()); // 调用父类的方法
    console.log(this.name); // 调用子类的属性
  }
}

// 类类型接口

interface FoodInterface {
  type: string;
}

class FoodClass implements FoodInterface {
  type: string;
  // 不写constructor的话，type不会被初始化
  constructor(type: string) {
    this.type = type;
  }
}
// 这个是上面的简写
class FoodClass1 implements FoodInterface {
  constructor(public type: string) {}
}

// 接口继承类
// 1.接口继承类，会继承类的成员，但是不包括实现
// 2.接口继承类，会继承类的private和protected成员，但是只能被类或者子类实现，不能被实例化

// 接口继承类，会继承类的成员，但是不包括实现
interface I extends Person {}

// 类与类，接口与接口，接口与类之间使用extends
// 类与接口之间使用implements

// I在这里只是传递了类型，没有具体的实现
class C extends Person implements I {
  //  private name:string;
  //  constructor(arg:string,public name1:string){
  //     this.name = arg;
  //      }
  getName(): string {
    return this.name1 + "new Class c";
  }
}
