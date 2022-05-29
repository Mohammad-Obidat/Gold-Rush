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

Handlebars.registerHelper('ifPlayer', function (value, options) {
  if (value === 1 || value === 2) {
    return options.fn();
  }
});
