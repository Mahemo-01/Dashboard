import styles from './mybarchart.module.css'

export function MyBarChart({ rows, data, indexBy }) {
  const keys = ['Gold Medal', 'Silver Medal', 'Bronze Medal', 'All Medals']
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
    const divider = 10 ** (valueDigits - rowDigits)
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

  // acc[1] === undefined || val > acc[1] ) ? val : acc[1]
  return (
    <div className={styles.main_cont}>

      <div className={styles.bar_cont}>
        <div className={styles.bar_chart} style={(chartHeight === maxValue) ? { '--var-display': 'flex' } : { '--var-display': 'none' }}>

          <div className={styles.row_cont}>
            {rowValues.map(row => (
              <div className={styles.bar_row}>
                <span>{row}</span>
              </div>
            ))}
          </div>


          {data.map(item => (
            <div className={styles.chart_item}>

              {keys.map(category => (
                <div className={styles.bar_line} style={{ height: `calc(100% * ${item[category]} / ${chartHeight})` }}></div>
              )
              )}

              <div className={styles.name}>
                {item[indexBy]}
              </div>

            </div >
          ))}

        </div >
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


    //   groupMode="grouped"
    //   valueScale={{ type: 'linear' }

    //   axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: 'country',
    //     legendPosition: 'middle',
    //     legendOffset: 32
    //   }}

    //   axisLeft={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: 'food',
    //     legendPosition: 'middle',
    //     legendOffset: -40
    //   }}

    //   enableGridX={true}
  )
}