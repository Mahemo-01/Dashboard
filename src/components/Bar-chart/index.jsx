import { ResponsiveBar } from '@nivo/bar'
import { mockBarData as data } from '../../data/mockData'

import styles from './barchart.module.css'

export function BarChart() {
  return (
    <ResponsiveBar
      data={data}
      theme={{
        // yo
        axis: {
          domain: {
            line: {
              stroke: 'red',
            },
          },
          legend: {
            text: {
              fill: 'red',
            },
          },
          ticks: {
            line: {
              stroke: 'red',
              strokeWidth: 1,
            },
            text: {
              fill: 'red',
            },
          },
        },
        legends: {
          text: {
            fill: 'red',
          },
        },
        grid: {
          line: {
            stroke: 'red',
          },
        },
      }}
      keys={[
        'hot dog',
        'burger',
        'sandwich',
        'kebab',
        'fries',
        'donut'
      ]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      valueFormat=" >-"
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
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
      borderColor="black"
      axisTop={null}
      axisRight={null}
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
      enableLabel={false}
      labelTextColor={{ theme: 'background' }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
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
      isFocusable={true}
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
  )
}