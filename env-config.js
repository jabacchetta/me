const debug = process.env.NODE_ENV !== "production";

module.exports = {
  'process.env.url': debug ? '' : 'https://jabacchetta.github.io/me/'
}
