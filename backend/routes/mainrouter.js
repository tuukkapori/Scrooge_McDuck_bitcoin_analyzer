const express = require('express')
const axios = require('axios')
const router = express.Router()
const {
  highestTradingVolume,
  longestBearish,
  bestDays,
  formatData,
} = require('../functions/functions')

router.post('/', async (req, res) => {
  const { from: fromAsMilliseconds, to: toAsMilliseconds } = req.body

  // client sends timestamp as milliseconds,
  // convert time to seconds for api
  const from = Number(fromAsMilliseconds) / 1000
  const to = Number(toAsMilliseconds) / 1000

  console.log('sekunteina, from: ', from, ' to: ', to)

  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${from}&to=${to}`

  const apiResponse = await axios.get(url)

  console.log(apiResponse.data.length)

  let priceData = apiResponse.data.prices
  let marketCapData = apiResponse.data.market_caps
  let volumeData = apiResponse.data.total_volumes

  /* Check the date range and format data if needed. 
Frontend makes sure that dates are atleast 1 day apart */
  if (to - from < 7776000) {
    let delta = 24
    priceData = formatData(priceData, delta)
    marketCapData = formatData(marketCapData, delta)
    volumeData = formatData(volumeData, delta)
  }

  console.log('Price data length', priceData.length)

  const highestVolumeDay = highestTradingVolume(volumeData)
  const bearishStreak = longestBearish(priceData)
  const [buyDay, sellDay] = bestDays(priceData)

  let tradePossible = false
  let bestTrade = {}

  if (buyDay !== 0) {
    tradePossible = true
  }

  if (tradePossible) {
    bestTrade = {
      buy: {
        date: buyDay[0],
        price: buyDay[1],
      },
      sell: {
        date: sellDay[0],
        price: sellDay[1],
      },
    }
  }

  const responseObject = {
    from,
    to,
    bearishStreak,
    highestVolumeDay,
    tradePossible,
    bestTrade,
  }

  console.log(responseObject)

  res.json(responseObject)
})

module.exports = router
