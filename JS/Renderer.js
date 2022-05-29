class Renderer {
  constructor() {
    this.playerContainer = $('.playground');
    this.playerTemplateHTML = $('#player-template').html();
    this.playerTemplate = Handlebars.compile(this.playerTemplateHTML);
    this.player1Score = $('#playerOne');
    this.player2Score = $('#playerTwo');
  }

  renderBoard(matrix) {
    this.playerContainer.removeClass('initial-game');
    this.playerContainer.empty();
    const compiledHTML = this.playerTemplate({ matrix });
    this.playerContainer.html(compiledHTML);
  }

  renderScore(score) {
    this.player1Score.text(score.player1);
    this.player2Score.text(score.player2);
  }
}
