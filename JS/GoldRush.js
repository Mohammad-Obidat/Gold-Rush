class GoldRush extends Matrix {
  constructor() {
    super();
    this.numRows = 9;
    this.numCols = 9;
    this.increaseScoreNum = 10;
    this.player1 = { score: 0 };
    this.player2 = { score: 0 };
    this.generateBoard();
  }

  getPlayersScore() {
    return { player1: this.player1.score, player2: this.player2.score };
  }

  generateCoins() {
    let coinsNum = 0;
    while (coinsNum < 20) {
      let x = Math.floor(Math.random() * this.numRows);
      let y = Math.floor(Math.random() * this.numCols);

      if (this.matrix[x][y] === '.') {
        this.matrix[x][y] = 'c';
        coinsNum++;
      }
    }
  }

  generateWalls() {
    let wallsNum = 0;
    while (wallsNum < 30) {
      let x = Math.floor(Math.random() * this.numRows);
      let y = Math.floor(Math.random() * this.numCols);

      if (this.matrix[x][y] === '.' && this.matrix[x][y] !== 'c') {
        this.matrix[x][y] = 'w';
        wallsNum++;
      }
    }
  }

  generateBoard() {
    this.matrix = this.generateMatrix();
    this.matrix[0][0] = 1;
    this.matrix[this.numRows][this.numCols] = 2;
    this.generateCoins();
    this.generateWalls();
    this.matrix[1][0] = '.';
    this.matrix[9][8] = '.';
  }

  getBoard() {
    return Array.from(this.matrix);
  }

  isValidMove(row, column) {
    if (column < 0 || column > this.numCols) {
      return false;
    }
    if (row < 0 || row > this.numRows) {
      return false;
    }
    const nextPosistion = this.get(row, column);
    if (nextPosistion !== '.' && nextPosistion !== 'c') {
      return false;
    }
    return true;
  }

  increaseScore(player, row, column) {
    let playerNum = this[`player${player}`];
    if (this.get(row, column) === 'c') {
      playerNum.score += this.increaseScoreNum;
    }

    if (playerNum.score === 100) {
      alert(`Player${player} won!`);
      window.location.reload();
    } else {
      let sumScorePlayers = this.player1.score + this.player2.score;
      let coinsNum = 15;
      let sumCoins = coinsNum * this.increaseScoreNum;
      if (sumScorePlayers === sumCoins) {
        alert(`No One Wins !!!`);
        window.location.reload();
      }
    }
  }

  movePlayer(player, direction = '') {
    let playerCoordinate = this.findCoordinate(player);

    if (!playerCoordinate) return;

    let row = playerCoordinate.x;
    let column = playerCoordinate.y;

    this.isValidMove(row, column);

    if (direction === 'down') {
      row++;
    } else if (direction === 'left') {
      column--;
    } else if (direction === 'right') {
      column++;
    } else {
      row--;
    }

    if (!this.isValidMove(row, column)) return;

    this.alter(playerCoordinate.x, playerCoordinate.y, '.');

    this.increaseScore(player, row, column);
    this.alter(row, column, player);
  }
}
