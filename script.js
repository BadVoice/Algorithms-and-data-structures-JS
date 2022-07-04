const script = () => {
    const btnInc = document.querySelector('.inc')
    const btnDec = document.querySelector('.dec')
    const wrapperCounter = document.querySelector('.wrapper__counter')
    let count = +prompt('Введите число', '');

    const renderCount = () => {
        wrapperCounter.innerHTML = `
        <p class="counter">${count}</p>
        `
        const counter = document.querySelector('.counter')
        console.dir(counter)
    }
    renderCount()

    const counterInc = () => {
        count++
    }

    const counterDec = () => {
        count--
        if (count < 0) count = 0
    }

    btnInc.addEventListener('click', (e) => {
        e.preventDefault()
        counterInc()
        renderCount()
    })

    btnDec.addEventListener('click', (e) => {
        e.preventDefault()
        counterDec()
        renderCount()
    })
}
script()