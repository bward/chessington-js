import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
      let square  = board.findPiece(this);
      if (this.player === Player.WHITE) {
        return [new Square(square.row+1, square.col)]
      }
      else {
        return [new Square(square.row-1, square.col)]
      }
    }
}
