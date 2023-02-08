/**
 * constructor function
 * 快速建造類似object的方式
 *
 * 在這裡的：
 * new: 創建一個空object
 * this: 為new創造的object
 *
 * 注意：
 * Functtion命名時，開頭要大寫
 */

function Person(name, age, friend, havaBaby) {
  this.name = name;
  this.age = age;
  this.friend = friend;
  this.haveBaby = havaBaby;

  this.sayHi = function () {
    console.log(this.name + " says hello to you.");
  };
}

let Eddie = new Person("Eddie", 18, "May", false);
let May = new Person("May", 12, "Eddie", false);
let Peter = new Person("Peter", 40, "John", true);

console.log(Eddie);
May.sayHi();
