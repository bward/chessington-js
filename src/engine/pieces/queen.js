import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let start = board.findPiece(this)
        let squares = board.getSquares();
        return squares.filter(square => (square.isDiagonal(start) || square.isLateral(start)) && !square.equals(start))
            .filter(end => board.canMoveBetween(start, end));
    }
}
