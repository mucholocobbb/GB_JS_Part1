'use strict'

let mover = {
    /**
     * Проверяет может ли пользователь сделать шаг.
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем.
     * @returns {boolean} true - если пользователь может перейти в направлении,  false - если нет. 
     */
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
            nextPoint.x < config.rowsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.colsCount;

    },
    /**
     *  Получает и отдает направление от пользователя
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Enter (2,4,6,8) to inline move, and (1,3,7,9) to diagonal move. Cancel to Exit'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Push for move: \n 2 - down \n 8 - up \n 4 - left \n 6 - right \n Thank you so much! Be careful! ;-) ');
                continue;
            }
            return direction;
        }

    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    }
};