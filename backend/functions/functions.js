const longestBearish = (prices) => {
  if (prices.length === 1) {
    return 0
  }
  let max = 0
  let temporaryMax = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i][1] < prices[i - 1][1]) {
      temporaryMax++
    } else {
      if (max < temporaryMax) {
        max = temporaryMax
      }
      temporaryMax = 0
    }
  }

  if (max < temporaryMax) {
    max = temporaryMax
  }

  return max
}

const highestTradingVolume = (total_volumes) => {
  const highestDay = total_volumes.reduce((acc, current) => {
    return acc[1] > current[1] ? acc : current
  })

  return highestDay
}

const bestDays = (prices) => {
  let indexOfBuy = 0
  let indexOfSell = 0
  let biggestDifference = 0

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j][1] > prices[i][1]) {
        const thisDifference = prices[j][1] - prices[i][1]

        if (thisDifference > biggestDifference) {
          indexOfBuy = i
          indexOfSell = j
          biggestDifference = thisDifference
        }
      }
    }
  }

  if (indexOfSell === 0) {
    return [0, 0]
  } else {
    return [prices[indexOfBuy], prices[indexOfSell]]
  }
}

const formatData = (data, delta) => {
  let newData = []

  for (let i = 0; i < data.length; i += delta) {
    newData.push(data[i])
  }

  return newData
}

module.exports = { highestTradingVolume, longestBearish, bestDays, formatData }
