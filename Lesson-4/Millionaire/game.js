'use strict'

let game = {
    name: null,
    count: 0,
    trueAnswers: "",

    /**
     * Запускает игру
     */
    run() {
        for (let i = 1; i <= Object.keys(question).length; i++) {
            console.clear();
            console.log(question["q" + i]);
            console.log(answer["a" + i]);
            let answ = prompt("Ваш ответ: ");
            if (answ == trueAnswer["t" + i]) {
                this.count++
            } else if (answ == null) {
                console.log("Игра Окончена!");
                console.log(` Вы ответили на ${this.count} правильных вопроса \n Вот где вы ошиблись:\n ${this.trueAnswers}`);
                break;
            } else {
                this.trueAnswers += `${question["q" + i]} Вы ответили ${answ}, но правильный ответ: ${trueAnswer["t" + i]} \n`;
            }
            console.clear();
        }
        console.log(` Вы ответили на ${this.count} правильных вопроса \n Вот где вы ошиблись:\n ${this.trueAnswers}`);
        this.count = 0;
        this.trueAnswers = "";

    },

    // Метод выполняется при открытии страницы
    init() {
        this.name = prompt("Привет! Как тебя зовут!?");
        console.log(`\n                   Привет ${this.name}! Ты готов поиграть?\n
        Если да, то вводи в консоль 'game.run()' жми 'ENTER' \n
                           И ПОЕХАЛИИ!\n                        __________________`);
    },
};


game.init();