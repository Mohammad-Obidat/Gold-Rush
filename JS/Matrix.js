class Matrix {
  constructor(numRows = 10, numCols = 10) {
    this.matrix = this.generateMatrix(numRows, numCols);
  }

  generateMatrix(numRows = 10, numCols = 10) {
    let matrix = [];
    for (let r = 0; r < numRows; r++) {
      matrix.push([]);
      for (let c = 0; c < numCols; c++) {
        matrix[r].push('.');
      }
    }
    return matrix;
  }

  print() {
    for (let i = 0; i < this.matrix.length; i++) {
      let line = '';
      for (let j = 0; j < this.matrix[i].length; j++) {
        line += this.matrix[i][j] + '\t';
      }
      console.log(line);
    }
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  alter(row, col, value) {
    let newValue = (this.matrix[row][col] = value);
    return newValue;
  }

  findCoordinate(value) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        if (value === this.matrix[r][c]) {
          return { x: r, y: c };
        }
      }
    }
  }
}
