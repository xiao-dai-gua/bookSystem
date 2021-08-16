//todo给数值定义类型
let isDon : boolean = false;
let num: number = 10
let myString:string = 'hahahhah'
let a: void;//todo 相当于将a设置为null 和 undefine 但是这样设置的值不能赋值给其他值
let b: string = 'sjhad';//todo此种方法定义的值只能赋值给特定的类型变量
let c:any = "12304"
    c=3456;//todo any定义的变可以随意赋值

 //! 类型推论 当没有定义类型且没有赋值的时候则认为是any 但是如果赋值了则类型推论成该数值类型
let d= 20
let e;
let f: number|string = "hahha"

//todo 定义接口类型必须一一统一，多了少了都不行
interface Person{
    name:String;
    // age?:number;//todo ?问好表示该属性可以不存在
    age?:string;//!因为定义了任意属性所以可选值必须是它的类型的子集
    gender:Number;
    [propName:string]:any;
    readonly id:number;//todo只读属性在对象第一次创建的时候就给它赋值，其他地方将不能赋值，
                       //todo 只能在对象第一次创建的时候赋值
}
let tom: Person  ={
    name:'lisi',
    age:'123',//!不能用;隔开
    gender:12,
    school:"heida",
    id:123//?如果此处不赋值将其定义为undefine或者null 但是其他地方也不能赋值
   
}

//todo 定义数组
let list:any[] = ['xiaoming',25]

//todo 定义函数
function sum (x,y,...student:string[]){//todo可以随意输出student的个数
    return x + y + student.join(" ");
}
function add(x:number,name:string="zhangsan",y:number,c?:number):number//todo :number可以不写,可选参数必须写在必写参数后面,name是可选参数此时却不做限制
{
    return x+y
}
//todo 函数形式赋值 
let myadd:(x:number,y:number)=>number=function(x,y){//!  =>不是箭头函数表示函数定义，左边是输入类型，右边是输出类型
    return x+y
}

//todo 定义元组
let information:[string,number]=['zja',24];
information.push('male')//todo 这种方式能输入一个值
information.push(null)//todo 当数组越界的时候会赋给联合类型

//todo 枚举 当前面的数值确定后，后面会依次+1 也可以赋值为小数
enum Days{Sun = 3,Mon =1,tue,wed};//todo是括号
console.log(Days["Sun"] === 3);//todo 手动赋值和未手动赋值的值重复了ts是不会察觉的
console.log(Days["wed"]=== 3);
console.log(Days[3] ==="wed");//*输出true因为Sun被覆盖了

//todo类型断言

//todo情况一：将联合类型断言为其中一种类型
interface Cat{
    name:String;
    run():void;
}
interface Fish{
    name:String;
    run():void;
}
function getName(animal:Cat|Fish){
    return animal.name
}//todo因为使用方法时会出现错误因此避免断言后调用方法或引入深层属性，以减少不必要的运行损失

//todo 情况二：将任何一种类型断言为any
const foo1:number = 1;
(window as any).foo.length = 1;//todo 运用此种方法会导致类型错误无法被发现，但是也可以解决类型错误此方法合理使用

//todo 情况三：将any断言为一个具体的类型





