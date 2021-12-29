const pricesHourly = [
  [1577837037103, 6412.84639784161],
  [1577840443088, 6400.183195857016],
  [1577844174112, 6452.701266161403],
  [1577848140451, 6472.734997584653],
  [1577851238015, 6463.273479119187],
  [1577855114844, 6459.984936772221],
  [1577858869352, 6466.275022382196],
  [1577862464201, 6445.939706616753],
  [1577866051896, 6427.706404769181],
  [1577869367988, 6408.749636232671],
  [1577872864963, 6408.922572379971],
  [1577876736509, 6416.878539022916],
]

const pricesDaily = [
  [1577836800000, 6412.84639784161],
  [1577923200000, 6412.448167227617],
  [1578009600000, 6234.201691113153],
  [1578096000000, 6541.826288033036],
  [1578182400000, 6587.5542745885095],
  [1578268800000, 6585.067986168254],
  [1578355200000, 6908.875149666955],
  [1578441600000, 7307.840392228419],
  [1578528000000, 7240.405633221215],
  [1578614400000, 7051.270625680576],
  [1578700800000, 7355.917442287579],
  [1578787200000, 7203.8185560592965],
  [1578873600000, 7350.567593453083],
  [1578960000000, 7282.907675838368],
  [1579046400000, 7910.127234921121],
  [1579132800000, 7909.779781948214],
  [1579219200000, 7829.528156380277],
  [1579305600000, 8027.134873079848],
  [1579392000000, 8030.890983244613],
  [1579478400000, 7833.230953209291],
  [1579564800000, 7778.071763455781],
  [1579651200000, 7870.658879746492],
  [1579737600000, 7810.331599413813],
  [1579824000000, 7613.073822327722],
  [1579910400000, 7648.164647841271],
  [1579996800000, 7572.214712229956],
  [1580083200000, 7796.2224179936775],
  [1580169600000, 8057.801665076384],
  [1580256000000, 8456.002845134844],
  [1580342400000, 8423.048513793692],
  [1580428800000, 8621.674924158713],
  [1580515200000, 8389.345427319253],
  [1580601600000, 8439.673223938584],
  [1580688000000, 8421.00124360104],
  [1580774400000, 8414.074850958064],
  [1580860800000, 8311.45251345368],
  [1580947200000, 8720.215991025094],
  [1581033600000, 8874.333340727395],
  [1581120000000, 8952.952499313633],
  [1581206400000, 9035.660390545574],
  [1581292800000, 9267.77436576357],
  [1581379200000, 9064.068629026156],
  [1581465600000, 9364.887969202422],
  [1581552000000, 9498.454201543153],
  [1581638400000, 9427.221702081284],
  [1581724800000, 9528.786850665145],
  [1581811200000, 9135.14704759717],
  [1581897600000, 9172.104193060246],
  [1581984000000, 8973.010783617869],
  [1582070400000, 9385.333662658793],
  [1582156800000, 8897.615277595773],
  [1582243200000, 8906.052218360242],
  [1582329600000, 8918.091267330046],
  [1582416000000, 8904.365511276923],
  [1582502400000, 9178.113475174932],
  [1582588800000, 8912.83484692709],
  [1582675200000, 8589.865197726598],
  [1582761600000, 8086.452074445834],
  [1582848000000, 7983.949940681771],
  [1582934400000, 7905.163813893958],
  [1583020800000, 7755.841979740712],
  [1583107200000, 7752.92714460959],
  [1583193600000, 7992.133215964888],
  [1583280000000, 7834.793731545937],
  [1583366400000, 7863.399408076787],
  [1583452800000, 8050.153492926535],
  [1583539200000, 8094.523173716613],
  [1583625600000, 7887.475558622892],
  [1583712000000, 7060.954210304582],
  [1583798400000, 6946.604182128345],
  [1583884800000, 6983.359700416577],
  [1583971200000, 7046.267440349036],
  [1584057600000, 4598.178050723126],
  [1584144000000, 4974.929966159308],
  [1584230400000, 4678.712747298543],
  [1584316800000, 4823.873940742251],
  [1584403200000, 4509.855956130319],
  [1584489600000, 4892.479304081295],
  [1584576000000, 4902.587403714269],
  [1584662400000, 5787.117525771312],
  [1584748800000, 5756.657388117135],
  [1584835200000, 5709.826778852306],
  [1584921600000, 5477.598417843867],
  [1585008000000, 5998.902353887937],
  [1585094400000, 6226.460655803391],
  [1585180800000, 6150.003928681609],
  [1585267200000, 6124.403291833885],
  [1585353600000, 5729.253477015574],
  [1585440000000, 5600.570981980311],
  [1585526400000, 5310.452523354348],
  [1585612800000, 5805.568079756095],
  [1585699200000, 5822.4575514861135],
  [1585785600000, 6066.182725839648],
  [1585872000000, 6278.1405114434065],
  [1585958400000, 6231.624849885226],
  [1586044800000, 6348.384048054807],
  [1586131200000, 6281.340833200699],
  [1586217600000, 6757.435383722668],
  [1586304000000, 6605.429805649589],
  [1586390400000, 6760.1286423845995],
  [1586476800000, 6676.419538243631],
  [1586563200000, 6276.863623084775],
  [1586649600000, 6290.322116196425],
  [1586736000000, 6323.950264013107],
  [1586822400000, 6277.747369241966],
  [1586908800000, 6244.820521048719],
  [1586995200000, 6080.236353989298],
  [1587081600000, 6500.850667019917],
  [1587168000000, 6469.204363378254],
  [1587254400000, 6659.778500105977],
  [1587340800000, 6557.760026966851],
  [1587427200000, 6310.620650491164],
  [1587513600000, 6302.078595586479],
  [1587600000000, 6578.985292859865],
  [1587686400000, 6851.232037740289],
  [1587772800000, 6924.154651408166],
  [1587859200000, 6965.921306796378],
  [1587945600000, 7100.961549107702],
  [1588032000000, 7181.850202872891],
  [1588118400000, 7163.313642757775],
  [1588204800000, 8038.370007921691],
  [1588291200000, 7867.761810408942],
  [1588377600000, 7954.947237709745],
  [1588464000000, 8081.762895076149],
  [1588550400000, 8110.104251182714],
  [1588636800000, 8147.88152142371],
  [1588723200000, 8305.957582914905],
  [1588809600000, 8468.364275636452],
]

const formatData = (data, delta) => {
  let newData = []

  for (let i = 0; i < data.length; i += delta) {
    newData.push(data[i])
  }

  return newData
}

const every24 = formatData(pricesHourly, 24)
console.log(every24)

module.exports = { formatData }
