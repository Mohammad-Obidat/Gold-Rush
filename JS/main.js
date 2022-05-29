const renderer = new Renderer();
const board = new GoldRush();

const renderData = () => {
  renderer.renderBoard(board.getBoard());
  renderer.renderScore(board.getPlayersScore());
};

$('#startBtn').on('click', () => {
  renderData();
});

$(document).on('keydown', function (e) {
  if (e.key === 'w') {
    board.movePlayer(1, 'up');
    renderData();
  } else if (e.key === 's') {
    board.movePlayer(1, 'down');
    renderData();
  } else if (e.key === 'd') {
    board.movePlayer(1, 'right');
    renderData();
  } else if (e.key === 'a') {
    board.movePlayer(1, 'left');
    renderData();
  }

  if (e.key === 'i') {
    board.movePlayer(2, 'up');
    renderData();
  } else if (e.key === 'k') {
    board.movePlayer(2, 'down');
    renderData();
  } else if (e.key === 'l') {
    board.movePlayer(2, 'right');
    renderData();
  } else if (e.key === 'j') {
    board.movePlayer(2, 'left');
    renderData();
  }
});
