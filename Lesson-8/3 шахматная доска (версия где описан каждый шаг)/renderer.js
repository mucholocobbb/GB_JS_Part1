'use strict'

let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderBoards();
        this.generateFigure();


    },

    generateBoard() {
        let board = '';
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                if (y % 2 !== 0) {
                    if (x % 2 == 0) {
                        board += `<td class="tdBl" data-x="${x}" data-y="${y}"></td>`;
                    } else {
                        board += `<td class="tdW" data-x="${x}" data-y="${y}"></td>`;
                    }
                } else {
                    if (x % 2 !== 0) {
                        board += `<td class="tdBl" data-x="${x}" data-y="${y}"></td>`;
                    } else {
                        board += `<td class="tdW" data-x="${x}" data-y="${y}"></td>`;
                    }
                }

            }
            board += '</tr>';

        }
        return `<table class="container"><tbody>${board}</tbody></table>`;

    },

    generateFigure() {
        for (let y = 1; y < config.rowsCount; y++) {
            for (let x = 1; x < config.colsCount; x++) {
                let position = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
                for (let i = 0; i < figures.length; i++) {
                    if (position.getAttribute('data-x') == figures[i].x && position.getAttribute('data-y') == figures[i].y) {
                        if (position.classList.contains('tdBl')) {
                            position.innerHTML = `<p class="pW">${figures[i].sym}</p>`;
                        } else {
                            position.innerHTML = `<p class="pB">${figures[i].sym}</p>`;
                        }

                    }

                }

            }
        }

    },

    renderBoards() {
        for (let y = 0; y < config.rowsCount; y++) {
            let position = document.querySelector(`[data-x="0"][data-y="${y}"]`);
            position.classList.add('squareY');
            if (y == 0) {
                continue;
            } else {
                position.innerHTML = `<p class="boardText">${number[y]}</p>`;
            }
        }
        for (let x = 0; x < config.rowsCount; x++) {
            let position = document.querySelector(`[data-x="${x}"][data-y="0"]`);
            position.classList.add('squareX');
            if (x == 0) {
                continue;
            } else {
                position.innerHTML = `<p class="boardText">${abc[x]}</p>`;
            }
        }
    }


}

renderer.renderBoard();