const game = () => {
    let lvl = 3
    let HP = 3
    let damage = 1
    let lvlCounter = 1

    while (HP > 0) {
        let randomValue = Math.floor(Math.random() * lvl)
        console.log(randomValue)
        let answer = +input
        console.log(answer)



        if (randomValue !== answer) {
            HP = HP - damage
        } else {
            alert('Ygadal')
            lvlCounter++
            lvl++
            HP = 3
        }

        if (HP === 0) {
            alert('Закончились жизни')

        }

        if (lvlCounter === 6) {
            alert('Прошел игру')
            return true
        }
    }
}

const input = document.querySelector('.input').value;

const startRenderGame = () => {
    const btnStart = document.querySelector('.start')
    const btnEnd = document.querySelector('.end')
    let obj = {
        lvl: 3,
        HP: 3,
        lvlCounter: 1
    }
    const wrapperGame = document.querySelector('.wrapper__game')

    let div = document.createElement('div')

    div.innerHTML = ` 
            <p>Lvl ${obj.lvlCounter}  уагадайте число от 1 до ${obj.lvl} ${'❤'.repeat(obj.HP)}</p>

                    `

    btnStart.addEventListener('click', () => {
        wrapperGame.append(div)
        game()
    })

    btnEnd.addEventListener('click', () => {
        div.remove()
    })
}
startRenderGame()