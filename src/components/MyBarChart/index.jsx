import styles from './mybarchart.module.css'

export function MyBarChart({ rows = 9, data, indexBy, keys, groupMode, layout, reverse = false }) {
  const chartDataValues = []
  const rowValues = []

  const getHighestValue = (arr) => arr.reduce((acc, val) => (val > acc) ? val : acc)

  function maxDataValue(myData) {
    myData.map(item => {
      keys.map(category => chartDataValues.push(item[category]))
    })
    return getHighestValue(chartDataValues)
  }
  const maxValue = maxDataValue(data)

  function roundUpHeight(value, rows) {
    const valueDigits = value.toString().length
    const rowDigits = rows.toString().length
    const divider = 10 ** (valueDigits - rowDigits - 1)
    const height = Math.ceil(maxValue / divider) * divider
    return height
  }
  let chartHeight = roundUpHeight(maxValue, rows)

  function rowsOfChart(rows) {
    let incriment = chartHeight / (rows + 1)
    incriment = Math.round(incriment)
    for (var i = 0; i <= rows; i++) {
      {
        i == 0 ? chartHeight : chartHeight = chartHeight - incriment
      }
      rowValues.push(chartHeight)
    }
    rowValues.push(0)
    chartHeight = roundUpHeight(maxValue, rows)
  }
  rowsOfChart(rows)

  return (
    <div className={styles.main_cont}>

      <div className={styles.chart_cont}>

        <div className={styles.bar_cont} style={(reverse === true) ? { transform: 'rotateX(180deg)' } : { transform: '' }}>
          <div className={styles.row_cont} style={(chartHeight === maxValue) ? { '--var-opacity': '1' } : { '--var-opacity': '0' }}>
            {rowValues.map(row => (
              <div className={styles.row}>
                <span style={(reverse === true) ? { transform: 'rotateX(180deg)' } : { transform: '' }}>{row}</span>
              </div>
            ))}
          </div>

          <div className={styles.chart} >
            {data.map(item => (
              <div className={styles.chart_item}>
                {keys.map(category => (
                  <div className={styles.bar_line} style={{ height: `calc(100% * ${item[category]} / ${chartHeight})` }}></div>
                )
                )}
              </div >
            ))}
          </div >
        </div>

        <div className={styles.index_cont}>
          {data.map(item => (
            <div className={styles.name}>
              <span>
                {item[indexBy]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.legends_cont}>
        {keys.map(legend => (
          <div className={styles.legend}>
            <div className={styles.box}></div>
            <span>{legend}</span>
          </div>
        ))}
      </div>
    </div>
    //   groupMode="stacked"
    //   groupMode="grouped"
  )
}

  // acc[1] === undefined || val > acc[1] ) ? val : acc[1]