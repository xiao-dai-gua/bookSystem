//todo给数值定义类型
var isDone = false;
var num = 10;
var myString = 'hahahhah';
var a; //todo 相当于将a设置为null 和 undefine 但是这样设置的值不能赋值给其他值
var b = 'sjhad'; //todo此种方法定义的值只能赋值给特定的类型变量
var c = "12304";
c = 3456; //todo any定义的变可以随意赋值
//! 类型推论 当没有定义类型且没有赋值的时候则认为是any 但是如果赋值了则类型推论成该数值类型
var d = 20;
var e;
var f = "hahha";
console.log(f.length);
