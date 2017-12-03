const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: () => ({ "/": { page: "/" } }),
  assetPrefix: debug ? '' : 'https://jabacchetta.github.io/me',
}
