import { DarkMode } from '../DarkMode'
import styles from './navbar.module.css'

import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineBell } from 'react-icons/ai'
import { IoSettingsOutline, IoSearch } from 'react-icons/io5'

export function Navbar() {
  return (
    <>
      <div className={styles.navLayout}>
        {/* SEARCH BAR */}
        <div className={styles.search}>
          <input type="text" placeholder='Search...' />
          <button className={styles.icon}>
            <IoSearch></IoSearch>
          </button>
        </div>

        {/* ICONS */}
        <div className={styles.icons}>
          <DarkMode className={styles.icon}></DarkMode>

          <button className={styles.icon}>
            <AiOutlineBell />
          </button>

          <button className={styles.icon}>
            <IoSettingsOutline />
          </button>

          <button className={styles.icon}>
            <FaRegUserCircle />
          </button>
        </div>
      </div>
    </>
  )
}