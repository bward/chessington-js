import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this)
        let squares = board.getSquares();
        return squares.filter(square => square.isLateral(currentSquare) && !square.equals(currentSquare));
    }
}
