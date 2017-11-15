import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let start = board.findPiece(this)
        let squares = board.getSquares();
        return squares.filter(square => square.isLateral(start) && !square.equals(start))
            .filter(end => board.canMoveBetween(start, end));
    }
}
