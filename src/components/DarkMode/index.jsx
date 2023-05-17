import { useEffect, useState } from 'react'
import styles from './darkmode.module.css'

import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'

export function DarkMode({ className }) {
  const [isDark, setDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    { isDark ? '' : document.body.classList.add(styles.lightMode) }
  }, [])

  function changeColorTheme() {
    setDarkTheme(!isDark)
    document.body.classList.toggle(styles.lightMode)
  }

  return (
    <>
      <button onClick={changeColorTheme} className={className}>
        {isDark ? <BsFillSunFill></BsFillSunFill> : <BsFillMoonFill></BsFillMoonFill>}
      </button>
    </>
  )
}