const level = (level = 3) => {
    const damage = 1;
    let hitpoints = 3;
    // Угадываем пока HP > 0
    while (hitpoints > 0) {
        const question = Math.floor(Math.random() * level); // рандомное значение 
        const answer = +prompt(
            `2 lvl От ${1} до ${level}. У тебя ${"♥".repeat(hitpoints)}`
        ); // вводим свое значение 
        if (question !== answer) {
            hitpoints -= damage;
        } else {
            // Прошли
            return true;
        }
    }

    // Умерли
    return false;
};

const game = () => {
    const levelResult = level();
    if (levelResult) {
        alert("Прошел");
    } else {
        alert("Не прошел");
    }
};

game()