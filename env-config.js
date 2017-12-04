const debug = process.env.NODE_ENV !== "production";

module.exports = {
  'process.env.url': debug ? '' : 'http://bacchetta.co'
}
