import { useState } from 'react'
import styles from './sidebar.module.css'
import { Link } from 'react-router-dom'

import { RxHamburgerMenu } from 'react-icons/rx'
import { RiHome2Line, RiContactsBook2Line, RiFilePaperLine, RiCalendarLine, RiQuestionLine, RiBarChart2Fill, RiPieChart2Fill, RiLineChartLine, RiMap2Line } from 'react-icons/ri'
import { FaRegUserCircle, FaUserFriends } from 'react-icons/fa'

export function Sidebar() {
  const [isCollapsed, toggleCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <>
      <nav className={isCollapsed ? `${styles.sidebar} ${styles.closed}` : `${styles.sidebar}`}>
        <div className={styles.row} style={{ justifyContent: !isCollapsed ? '' : 'center' }}>
          {!isCollapsed && (<div className={styles.logo}>Logo</div>)}
          <button onClick={() => toggleCollapsed(!isCollapsed)} className={styles.icon}>
            <RxHamburgerMenu></RxHamburgerMenu>
          </button>
        </div>

        {!isCollapsed && (
          <div className={styles.profile}>
            <div className={styles.user_img}>
              <img alt="profile-user" src='src/assets/img/user.png' />
            </div>
            <div className={styles.text}>
              <h2>Mario Hernandez</h2>
              <span>Fancy Admin</span>
            </div>
          </div>
        )}

        <div className={styles.list}>
          <Item title="Dashboard" to="/" icon={<RiHome2Line />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />

          <div className={styles.sub} style={{ padding: !isCollapsed ? '' : 0, textAlign: !isCollapsed ? '' : 'center' }}>Data</div>

          <Item title="Team" to="/team" icon={<FaUserFriends />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="Contacts" to="/contacts" icon={<RiContactsBook2Line />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="Invoices" to="/invoices" icon={<RiFilePaperLine />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />

          <div className={styles.sub} style={{ padding: !isCollapsed ? '' : 0, textAlign: !isCollapsed ? '' : 'center' }}>Pages</div>

          <Item title="Profile Form" to="/form" icon={<FaRegUserCircle />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="Calendar" to="/calendar" icon={<RiCalendarLine />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="FAQ page" to="/faq" icon={<RiQuestionLine />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />

          <div className={styles.sub} style={{ padding: !isCollapsed ? '' : 0, textAlign: !isCollapsed ? '' : 'center' }}>Charts</div>

          <Item title="Bar Chart" to="/bar" icon={<RiBarChart2Fill />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="Pie Chart" to="/pie" icon={<RiPieChart2Fill />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="Line Chart" to="/line" icon={<RiLineChartLine />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
          <Item title="Geography Chart" to="/geography" icon={<RiMap2Line />} selected={selected} setSelected={setSelected} isCollapsed={isCollapsed} />
        </div>

      </nav>
    </>
  )
}

export function Item({ title, to, icon, selected, setSelected, isCollapsed }) {
  return (
    <div className={selected === title ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setSelected(title)} style={{ padding: !isCollapsed ? '' : 0 }}>
      <Link to={to}>
        <div className={styles.icon}>
          {icon}
        </div>
        {!isCollapsed ?
          <span className={styles.title}>{title}</span>
          : ''}
      </Link>
    </div >
  );
};
