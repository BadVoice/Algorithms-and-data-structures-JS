const script = () => {
    const btnInc = document.querySelector('.inc')
    const btnDec = document.querySelector('.dec')
    const wrapperCounter = document.querySelector('.wrapper__counter')
    let heal = 3
    let max = 3
    const result = Math.round(Math.random() * max)
    const result2 = Math.round(Math.random() * max)
    const result3 = Math.round(Math.random() * max)
    let answer2
    let answer3
    while (heal > 0) {

        let answer = +prompt('1 lvl Введи от 0 до 3')

        if (answer === result) {
            answer2 = +prompt('2 lvl Введи от 0 до 3')
        } else if (answer !== result) {
            heal -= 1
        }

        if (result2 === answer2) {
            answer3 = +prompt('3 lvl Введи от 0 до 3')
        } else if (answer2 !== result2) {
            heal -= 1
        }

        if (result3 === answer3) {
            confirm = +prompt('Конец')
        } else if (answer2 !== result2) {
            heal -= 1
        }

        console.log(result)
        console.log(result2)
        console.log(result3)
    }







    // const renderCount = () => {
    //     wrapperCounter.innerHTML = `
    //         <p class="counter">${count}</p>
    //         `
    //     const counter = document.querySelector('.counter')
    //     console.dir(counter)
    // }
    // renderCount()

    // const counterInc = () => {
    //     count++
    // }

    // const counterDec = () => {
    //     count--
    //     if (count < 0) count = 0
    // }

    // btnInc.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     counterInc()
    //     renderCount()
    // })

    // btnDec.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     counterDec()
    //     renderCount()
    // })
}
script()