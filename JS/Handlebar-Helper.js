Handlebars.registerHelper('ifEmpty', function (value, options) {
  if (value === '.') {
    return options.fn();
  }
});

Handlebars.registerHelper('ifCoin', function (value, options) {
  if (value === 'c') {
    return options.fn();
  }
});

Handlebars.registerHelper('ifWall', function (value, options) {
  if (value === 'w') {
    return options.fn();
  }
});

Handlebars.registerHelper('ifPlayer1', function (value, options) {
  if (value === 1) {
    return options.fn();
  }
});

Handlebars.registerHelper('ifPlayer2', function (value, options) {
  if (value === 2) {
    return options.fn();
  }
});
