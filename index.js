let num = 266219

let arrNum = num.toString().split('')
const render = (arrNum) => {

    let result = arrNum.reduce((acc, inc) => {
        acc *= Number(inc)
        return acc
    })
    console.log(result)

    let sum = result ** 3
    let twoNumbers = String(sum).slice(0, 2)

    console.log(twoNumbers)
    return sum


}
render(arrNum)

let titleQuestion = prompt('как называется наш проект')
let screensQuestion = prompt('Какие типы экранов нужно разработать?')
let screenPriceQuestion = prompt('Сколько будет стоить данная работа?')

let serviceQuestion = prompt('Какой дополнительный тип услуги нужен?')
let firstServiceQuestion = prompt('Введите название услуги')
let secondServiceQuestion = prompt('Сколько это будет стоить?')

let rollbackQuestion = prompt('Нужен ли адаптив на сайте?')
let fullPriceQuestion = prompt('как называется наш проект')
let adaptiveQuestion = prompt('как называется наш проект')


let title = titleQuestion
let screens = screensQuestion
let screenPrice = screenPriceQuestion
let rollback = rollbackQuestion


let fullPrice = screenPrice + firstServiceQuestion + secondServiceQuestion
let adaptive = adaptiveQuestion


const parseIntQuestion = (question) => {
    let num = "";

    for (let el of question) {
        if (Number.isInteger(Number(el))) num = num + String(el);
    }

    return Number(num);
};
console.log(parseIntQuestion(question));