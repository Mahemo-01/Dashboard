import { Header } from "../../components/Header"
import { BarChart } from "../../components/Bar-chart"

import styles from './barchart.module.css'

export function Bar() {

  return (
    <>
      <Header title={'Bar-Chart'} subtitle={'Your bar chart'}></Header>
      <div className={styles.chart_cont}>
        <BarChart></BarChart>
      </div>
    </>
  )
}