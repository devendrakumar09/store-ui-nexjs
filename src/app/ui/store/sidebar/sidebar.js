import React from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link'

const Sidebar = () => {
    const links = [
      {
      id: 1,
      title:'Orders',
      link: "/store/orders",
    },
    {
      id: 2,
      title:'Products',
      link: "/store/products",
    },    
    {
      id: 3,
      title:'Customers',
      link: "/store/customers",
    },
    {
      id: 4,
      title:'Offers',
      link: "/store/offers",
    },

    {
      id: 5,
      title:'Ask',
      link: "/store/ask",
    },
    
  ];


  return (
    <>
    <nav id="sidebarMenu" className={styles.sidebar +' '+ 'col-md-3 col-lg-2 d-md-block shadow sidebar collapse'}>
      <div className="streProfile">
        sajidjsaiuj
      </div>
        <div className="position-sticky p-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href={'/store'}>
                <span data-feather="home"></span>
                Dashboard
              </Link>
            </li>
            {links.map(({ id, title, link }) => (
              <li className="nav-item" key={id}>
                <Link className="nav-link" href={link}>
                  <span data-feather="file"></span>
                  {title}
                </Link>
              </li>
            ))}
            
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Store Setting</span>
            <Link className="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </Link>
          </h6>
          {/* <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Following
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Your Order
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={'/store/settings'}>
                <span data-feather="file-text"></span>
                Store Manageent
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Sales Report
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>


    </>
  )
}

export default Sidebar