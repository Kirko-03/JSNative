console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
//


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(a: number) {
//     return function (b: number) {
//         return a + b
//
//     }
//
// }
//
// console.log(sum(3)(6))
// console.log(sum(3)(10))
//
// // Task 02
// // Реализовать функцию makeCounter которая работает следующим образом:
// function makeCounter() {
//     let count = 1
//     return function () {
//         return count++
//     }
// }
//
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// function makeCounter2(n: number) {
//     const a = n
//     return {
//         increase: () => {
//             return n+1
//         },
//         decrease: () => {
//             return n--
//         },
//         reset:()=>{
//             return n=0
//         },
//         set:()=>{
//             return n = a
//         }
//     }
// }
// console.log(makeCounter2(2).increase())
// console.log(makeCounter2(2).decrease())
// console.log(makeCounter2(2).reset())
// console.log(makeCounter2(2).set())
// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// function superSum(num: number) {
//     if (num === 0) {
//         return 0
//     }
//     if (num === 1) {
//         return (n: number) => n
//     }
//     let _arguments: Array<number> = []
//
//     function helper(...args: Array<number>) {
//         _arguments = [..._arguments, ...args]
//         if (_arguments.length >= num) {
//             _arguments.length = num
//            return  _arguments.reduce((acc, el) => acc + el)
//         } else {
//             return helper
//         }
//     }
//
//     return helper()
// }
//
// console.log(superSum(0)) //0
//
// // @ts-ignore
// console.log(superSum(3)(2)(5)(3))   //10
//
// // @ts-ignore
// console.log(superSum(3)(2)(5, 3))  //10
// // @ts-ignore
// console.log(superSum(3)(2, 5, 3)) //10
// // @ts-ignore
// console.log(superSum(3)(2, 5)(3))//10
// // @ts-ignore
// console.log(superSum(3)(2, 5)(3, 9))     //10

// function sumTo(n:number){
//     let a =0
//     for(let i=0;i<=n;i++){
//       a+=i
//     }
//     alert(a)
// }
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList(list:any) {
    if(list.next){
        printList(list.next)
    }
   alert(list.value)

}
printList(list)

// P.S. типизируйте только аргументы, а при вызове функции используйте
// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug

export default () => {
}