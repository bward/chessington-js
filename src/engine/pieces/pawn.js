import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.hasMoved = false;
    }

    moveTo(board, newSquare) {
      super.moveTo(board, newSquare);
      this.hasMoved = true;
    }

    getAvailableMoves(board) {
        let square  = board.findPiece(this);
        let sign = (this.player === Player.WHITE) ? 1 : -1;

        let moves = [Square.at(square.row+sign, square.col)];
        moves = moves.concat(this.hasMoved? [] : [Square.at(square.row+sign*2, square.col)]);

        let captureSquares = [Square.at(square.row+sign, square.col+1), Square.at(square.row+sign, square.col-1)];

        moves = moves.filter(board.isOnBoard.bind(board));
        captureSquares = captureSquares.filter(board.isOnBoard.bind(board));

        return moves.filter(end => board.canMoveBetween(square, end) && board.isEmpty(end))
            .concat(captureSquares.filter(target => board.isValidTarget(this.player, target) && !board.isEmpty(target)));
    }
}
