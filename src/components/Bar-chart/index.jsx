import { ResponsiveBar } from '@nivo/bar'
import { mockBarData as data } from '../../data/mockData'

import styles from './barchart.module.css'

export function BarChart() {
  const newData = data
  newData.map((country) => {
    country['All Medals'] = country['Gold Medal'] + country['Bronze Medal'] + country['Silver Medal']
  })

  return (
    <ResponsiveBar
      data={newData}
      theme={{
        // yo
        axis: {
          domain: {
            line: {
              stroke: 'var(--chart-color)',
            },
          },
          legend: {
            text: {
              fill: 'var(--chart-color)',
            },
          },
          ticks: {
            line: {
              stroke: 'var(--chart-color)',
              strokeWidth: 10,
            },
            text: {
              fill: 'var(--chart-color)',
            },
          },
        },
        legends: {
          text: {
            fill: 'var(--chart-color)',
          },
        },
        grid: {
          line: {
            stroke: 'var(--chart-color)',
          },
        },
        tooltip: {
          container: {
            color: 'var(--tooltip-color)',
          }
        }
      }}
      keys={[
        'Gold Medal',
        'Silver Medal',
        'Bronze Medal',
        'All Medals',
      ]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 50 }}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      colors={{ scheme: 'nivo' }}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      enableGridX={true}
      labelTextColor={{ theme: 'background' }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 120,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 2,
          symbolSize: 20,
          itemDirection: 'left-to-right'
        }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
  )
}