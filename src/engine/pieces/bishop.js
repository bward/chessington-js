import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this)
        let squares = board.getSquares();
        return squares.filter(square => square.isDiagonal(currentSquare) && !square.equals(currentSquare));
    }
}
