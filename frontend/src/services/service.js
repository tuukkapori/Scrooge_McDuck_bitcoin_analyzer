import axios from 'axios'
const baseUrl = '/api/'

const getData = async (startDate, endDate) => {
  // format dates to include full days in the range
  let from = new Date(startDate)
  let to = new Date(endDate)
  from.setUTCHours(0, 0, 0, 0)
  to.setUTCHours(23, 59, 59, 0)

  console.log('from: ', from.getTime(), 'to: ', to.getTime())

  const res = await axios.post(baseUrl, {
    from: from.getTime(),
    to: to.getTime(),
  })

  return res.data
}

export { getData }
