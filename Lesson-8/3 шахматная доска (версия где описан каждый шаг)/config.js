'use strict'

let config = {
    rowsCount: 9,
    colsCount: 9,
};

let figures = [{
        x: 1,
        y: 1,
        sym: '<i class="fas fa-chess-rook"></i>',
    },
    {
        x: 2,
        y: 1,
        sym: '<i class="fas fa-chess-knight"></i>',
    },
    {
        x: 3,
        y: 1,
        sym: '<i class="fas fa-chess-bishop"></i>',
    },
    {
        x: 4,
        y: 1,
        sym: '<i class="fas fa-chess-king"></i>',

    },
    {
        x: 5,
        y: 1,
        sym: '<i class="fas fa-chess-queen"></i>',
    },
    {
        x: 6,
        y: 1,
        sym: '<i class="fas fa-chess-bishop"></i>',
    },
    {
        x: 7,
        y: 1,
        sym: '<i class="fas fa-chess-knight"></i>',
    },
    {
        x: 8,
        y: 1,
        sym: '<i class="fas fa-chess-rook"></i>',
    },
    {
        x: 1,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 2,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 3,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 4,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',

    },
    {
        x: 5,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 6,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 7,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 8,
        y: 2,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    //oposit
    {
        x: 1,
        y: 8,
        sym: '<i class="fas fa-chess-rook"></i>',
    },
    {
        x: 2,
        y: 8,
        sym: '<i class="fas fa-chess-knight"></i>',
    },
    {
        x: 3,
        y: 8,
        sym: '<i class="fas fa-chess-bishop"></i>',
    },
    {
        x: 4,
        y: 8,
        sym: '<i class="fas fa-chess-king"></i>',

    },
    {
        x: 5,
        y: 8,
        sym: '<i class="fas fa-chess-queen"></i>',
    },
    {
        x: 6,
        y: 8,
        sym: '<i class="fas fa-chess-bishop"></i>',
    },
    {
        x: 7,
        y: 8,
        sym: '<i class="fas fa-chess-knight"></i>',
    },
    {
        x: 8,
        y: 8,
        sym: '<i class="fas fa-chess-rook"></i>',
    },
    {
        x: 1,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 2,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 3,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 4,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',

    },
    {
        x: 5,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 6,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 7,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },
    {
        x: 8,
        y: 7,
        sym: '<i class="fas fa-chess-pawn"></i>',
    },

];

let abc = ["", "A", "B", "C", "D", "E", "F", "G", "H"];

let number = ["", "1", "2", "3", "4", "5", "6", "7", "8"];