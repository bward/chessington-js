import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current = board.findPiece(this);
        return board.getSquares()
            .filter(square => (Math.abs(square.row - current.row) === 2 && Math.abs(square.col - current.col) === 1)
                           || (Math.abs(square.row - current.row) === 1 && Math.abs(square.col - current.col) === 2));
    }
}
