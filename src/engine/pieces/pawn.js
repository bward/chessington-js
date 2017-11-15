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
        let moves = [];

        if (this.player === Player.WHITE) {
            if (board.findPiece(this).row === 7) {
                return moves;
            }
            moves = [Square.at(square.row+1, square.col)];
            moves = moves.concat(this.hasMoved? [] : [Square.at(square.row+2, square.col)]);
        }
        else {
            if (board.findPiece(this).row === 0) {
                return moves;
            }
            moves = [Square.at(square.row-1, square.col)];
            moves = moves.concat(this.hasMoved? [] : [Square.at(square.row-2, square.col)]);
        }

        return moves.filter(end => board.canMoveBetween(square, end) && board.isEmpty(end));
    }
}
