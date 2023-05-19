import { mockBarData as data } from '../../data/mockData'

import { Header } from "../../components/Header"
import { BarChart } from "../../components/Bar-chart"
import { MyBarChart } from '../../components/MyBarChart'

import styles from './barchart.module.css'



export function Bar() {

  data.map((country) => {
    country['All Medals'] = country['Gold Medal'] + country['Bronze Medal'] + country['Silver Medal']
  })

  return (
    <>
      <Header title={'Bar-Chart'} subtitle={'Your bar chart'}></Header>
      <MyBarChart
        rows={9}
        data={data}
        indexBy={'country'}>

      </MyBarChart>
    </>
  )
}