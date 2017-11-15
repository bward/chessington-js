import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    isEmpty(square) {
        return this.getPiece(square) === undefined;
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    getSquares() {
        let squares = [];
        for(let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            for(let j = 0; j < GameSettings.BOARD_SIZE; j++) {
                squares.push(Square.at(i, j))
            }
        }
        return squares;
    }

    squaresBetween(square1, square2) {
        const rowDiff = square1.row - square2.row;
        const colDiff = square1.col - square2.col;

        const rowDirection = Math.sign(rowDiff);
        const colDirection = Math.sign(colDiff);
        const distance = Math.max(Math.abs(rowDiff), Math.abs(colDiff));

        let squares = [];

        for (let i = 1; i < distance; i++) {
            squares.push(Square.at(square1.row-rowDirection*i, square1.col-colDirection*i));
        }

        return squares;
    }

    canMoveBetween(square1, square2) {
        let squares = this.squaresBetween(square1, square2);
        return squares.every(this.isEmpty.bind(this));
    }

    isValidTarget(player, square) {
        let targetPiece = this.getPiece(square);
        if(targetPiece === undefined){
            return true;
        }
        if(targetPiece instanceof King){
            return false;
        }
        if(player === targetPiece.player){
            return false;
        }
        return true;
    }

    isOnBoard(square) {
        return 0<=square.row && square.row<GameSettings.BOARD_SIZE
            && 0<=square.col && square.col<GameSettings.BOARD_SIZE
    }
}
