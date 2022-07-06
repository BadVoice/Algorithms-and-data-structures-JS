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




const parseIntQuestion = (question) => {
    let num = "";

    for (let el of question) {
        if (Number.isInteger(Number(el))) num = num + String(el);
    }

    return Number(num);
};
console.log(parseIntQuestion(question));