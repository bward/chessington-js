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
        if (this.player === Player.WHITE) {
            let moves = [Square.at(square.row+1, square.col)];
            return moves.concat(this.hasMoved? [] : [Square.at(square.row+2, square.col)])
        }
        else {
            let moves = [Square.at(square.row-1, square.col)];
            return moves.concat(this.hasMoved? [] : [Square.at(square.row-2, square.col)])
        }
    }
}
