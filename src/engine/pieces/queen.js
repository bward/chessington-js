import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this)
        let squares = board.getSquares();
        return squares.filter(square => (square.isLateral(currentSquare) || square.isDiagonal(currentSquare))
                                        && !square.equals(currentSquare));
    }
}
