import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <>
      {/* <header className={styles.topHeader + ' ' + 'navbar sticky-top flex-md-nowrap p-2 shadow navbar-light '} >
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap me-5">
            <a className="nav-link px-3" href="#">Sign out</a>
          </div>
        </div>
      </header> */}


      <header className={styles.topHeader + ' ' + 'navbar sticky-top flex-md-nowrap p-2 shadow'}>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">SHOWROOM DASHBOARD</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>        
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">Sign out</a>
            </div>
          </div>
      </header>
    </>
  )
}

export default Navbar