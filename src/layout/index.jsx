import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'

import styles from './layout.module.css'

export function Layout() {

  return (
    <>
      <Sidebar></Sidebar>
      <main className='content'>
        <Navbar></Navbar>
        <section className={styles.section}>
          <Outlet></Outlet>
        </section>
      </main>
    </>
  )
}