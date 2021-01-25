const BN = require('../../bn')

function ticker (fiatCode, cryptoCode) {
  return Promise.resolve({
    rates: {
      ask: BN(105),
      bid: BN(100)
    }
  })
}

module.exports = {ticker}
