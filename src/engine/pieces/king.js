import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current = board.findPiece(this);
        return board.getSquares()
            .filter(square => Math.max(
                Math.abs(current.row - square.row),
                Math.abs(current.col-square.col))
                === 1);
    }
}
