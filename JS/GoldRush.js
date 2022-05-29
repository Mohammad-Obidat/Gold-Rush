class GoldRush extends Matrix {
  constructor() {
    super();
    this.numRows = 9;
    this.numCols = 9;
    this.increaseScore = 10;
    this.player1 = { score: 0 };
    this.player2 = { score: 0 };
    this.generateBoard();
  }

  getPlayersScore() {
    return { player1: this.player1.score, player2: this.player2.score };
  }

  generateCoins() {
    let count = 0;
    while (count < 15) {
      let x = Math.floor(Math.random() * this.numRows);
      let y = Math.floor(Math.random() * this.numCols);

      if (this.matrix[x][y] === '.') {
        this.matrix[x][y] = 'c';
        count++;
      }
    }
  }

  generateBoard() {
    this.matrix = this.generateMatrix();
    this.matrix[0][0] = 1;
    this.matrix[this.numRows][this.numCols] = 2;
    this.generateCoins();
  }

  getBoard() {
    return Array.from(this.matrix);
  }

  movePlayer(player, direction = '') {
    let playerCoordinate = this.findCoordinate(player);
    if (!playerCoordinate) {
      return;
    }
    let row = playerCoordinate.x;
    let column = playerCoordinate.y;
    const isValidMove = (row, column) => {
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
    };

    if (direction === 'down') {
      row++;
    } else if (direction === 'left') {
      column--;
    } else if (direction === 'right') {
      column++;
    } else {
      row--;
    }

    if (!isValidMove(row, column)) {
      return;
    }
    this.alter(playerCoordinate.x, playerCoordinate.y, '.');

    let playerNum = this[`player${player}`];
    if (this.get(row, column) === 'c') {
      playerNum.score += this.increaseScore;
    }

    if (playerNum.score === 100) {
      alert(`Player${player} won!`);
      window.location.reload();
    } else {
      let sumScorePlayers = this.player1.score + this.player2.score;
      let coinsNum = 15;
      let sumCoins = coinsNum * this.increaseScore;
      if (sumScorePlayers === sumCoins) {
        alert(`No One Wins !!!`);
        window.location.reload();
      }
    }
    this.alter(row, column, player);
  }
}
