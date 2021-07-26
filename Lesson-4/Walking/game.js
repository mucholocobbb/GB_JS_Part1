'use strict'

let game = {

    /**
     * Запускает игру
     */
    run() {
        while (true) {
            // Получаем направление от игрока.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Game Over!");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if (mover.canPlayerMakeStep(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    // Метод выполняется при открытии страницы
    init() {
        console.log("Your look like 'O' :-) ");
        renderer.render();
        console.log("Write 'game.run()' in console and push 'ENTER' for start.")
    },
};


game.init();