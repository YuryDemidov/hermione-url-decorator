const URI = require('urijs');

module.exports = (hermione, options) => {
  hermione.on(hermione.events.NEW_BROWSER, browser => {
    browser.overwriteCommand('url', (originalUrlFn, uri) => {
      uri = uri ? new URI(uri).addQuery(options.query).toString() : uri;

      return originalUrlFn(uri);
    });
  });
};
