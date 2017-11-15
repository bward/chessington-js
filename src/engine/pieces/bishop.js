import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = [];
        let row = board.findPiece(this).row;
        let col = board.findPiece(this).col;
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                if((i + j === row + col || i - j === row - col) && !(i === row && j === col)) {
                    moves.push(Square.at(i, j))
                }
            }
        }

        return moves;
    }
}
