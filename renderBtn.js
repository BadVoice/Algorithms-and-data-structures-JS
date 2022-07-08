const renderBtn = () => {
    const startGame = document.querySelector('.start')

    startGame.addEventListener('submit', () => {
        game()
        let answer = +prompt(`lvl ${lvlCounter}  угадайте число от 1 до ${lvl}  ${'❤'.repeat(HP)}`)
    })

}
renderBtn()