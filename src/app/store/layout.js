import React from 'react'
import Navbar from '../ui/store/navbar/navbar'
import Sidebar from '../ui/store/sidebar/sidebar'
import styles from '../ui/store/store.module.css'
import '../ui/globals.css'

function Layout({ children }) {
  return (
    <div className='main'>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout