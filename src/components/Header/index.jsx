import styles from './header.module.css'

export function Header({ title, subtitle }) {
  return (
    <header>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.sub}>{subtitle}</h2>
      </div>
      <div className={styles.row}></div>
    </header>
  )
}
