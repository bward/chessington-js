export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
    
    isLateral(square) {
        return square.row === this.row || square.col === this.col;
    }
    
    isDiagonal(square) {
        return square.row + square.col === this.row + this.col || square.row - square.col === this.row - this.col;
    }
}
