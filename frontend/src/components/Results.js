import React from 'react'
import { showNormalDate } from '../functions/functions'

const Results = ({ results }) => {
  return (
    <div>
      <h2>{`${showNormalDate(results.from * 1000)} - ${showNormalDate(
        results.to * 1000
      )}`}</h2>
      <div
        style={{
          padding: '10px 25px',
          maxWidth: '400px',
          borderRadius: '20px',
          marginBottom: '5px',
          boxShadow: '0px 3px 6px 1px rgba(0,0,0,0.15)',
        }}
      >
        <h2>Longest Bearish Streak🐻📉</h2>
        <p>Longest bearish streak was {results.bearishStreak} days</p>
      </div>
      <div
        style={{
          padding: '10px 25px',
          maxWidth: '400px',
          borderRadius: '20px',
          marginBottom: '5px',
          boxShadow: '0px 3px 6px 1px rgba(0,0,0,0.15)',
        }}
      >
        <h2>Highest Trading volume</h2>
        <p>{`Highest Volume was on ${showNormalDate(
          results.highestVolumeDay[0]
        )}`}</p>
        <p>{`Trading volume: ${Math.floor(results.highestVolumeDay[1])} €`}</p>
      </div>

      {!results.tradePossible ? (
        <div
          style={{
            padding: '10px 25px',
            maxWidth: '400px',
            borderRadius: '20px',
            marginBottom: '5px',
            boxShadow: '0px 3px 6px 1px rgba(0,0,0,0.15)',
          }}
        >
          <h2>BEST TRADE??</h2>
          <p>very bearish🐻, best to open your shorts...</p>
        </div>
      ) : (
        <div
          style={{
            padding: '10px 25px',
            maxWidth: '400px',
            borderRadius: '20px',
            marginBottom: '5px',
            boxShadow: '0px 3px 6px 1px rgba(0,0,0,0.15)',
          }}
        >
          <h2>BEST TRADE😃</h2>
          <h4 style={{ marginBottom: '0px' }}>Buy</h4>
          <p>{`${showNormalDate(results.bestTrade.buy.date)}`}</p>
          <p> {`Price ${results.bestTrade.buy.price.toFixed(2)} €`} </p>
          <h4 style={{ marginBottom: '0px' }}>Sell</h4>
          <p>{`${showNormalDate(results.bestTrade.sell.date)}`}</p>
          <p> {`Price ${results.bestTrade.sell.price.toFixed(2)} €`} </p>
          <h4>{`Profits per 1 bitcoin: ${Math.floor(
            results.bestTrade.sell.price - results.bestTrade.buy.price
          )} € 🔥🔥🔥`}</h4>
        </div>
      )}
    </div>
  )
}

export default Results
