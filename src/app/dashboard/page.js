import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-sm-3 ">
            <div className={styles.headerCard +' '+ 'mb-2'}>
              <div className="d-flex justify-content-center align-items-center">
                <div className={styles.roundImage}>
                  {/* <img src="https://i.imgur.com/Mn9kglf.jpg" className="rounded-circle" width="97" /> */}
                  <Image src="../../../assets/dashboard/products.svg" className="rounded-circle" width={97} height={100} alt={'Products'}></Image>
                </div>
              </div>
              <div className="text-center">
                <h4 className="mt-3">Products</h4>
                {/* <span>Account Manager</span> */}
                <div className="px-5">
                  <Link href='dashboard/products' className={styles.follow +' '+ 'btn btn-primary'}>Explore</Link>
                </div>
              </div>
            </div>
          </div>  

          <div className="col-sm-3 ">
            <div className={styles.headerCard +' '+ 'mb-2'}>
              <div className="d-flex justify-content-center align-items-center">
                <div className={styles.roundImage}>
                  {/* <img src="https://i.imgur.com/Mn9kglf.jpg" className="rounded-circle" width="97" /> */}
                  <Image src="../../../assets/dashboard/offers.svg" className="rounded-circle" width={97} height={100} alt={'Products'}></Image>
                </div>
              </div>
              <div className="text-center">
                <h4 className="mt-3">Offers</h4>
                {/* <span>Account Manager</span> */}
                <div className="px-5">                  
                  <Link href='dashboard/offers' className={styles.follow +' '+ 'btn btn-primary'}>Explore</Link>
                </div>
              </div>
            </div>
          </div>  

          <div className="col-sm-3 ">
            <div className={styles.headerCard +' '+ 'mb-2'}>
              <div className="d-flex justify-content-center align-items-center">
                <div className={styles.roundImage}>
                  {/* <img src="https://i.imgur.com/Mn9kglf.jpg" className="rounded-circle" width="97" /> */}
                  <Image src="../../../assets/dashboard/followers.svg" className="rounded-circle" width={97} height={100} alt={'Products'}></Image>
                </div>
              </div>
              <div className="text-center">
                <h4 className="mt-3">Followers</h4>
                {/* <span>Account Manager</span> */}
                <div className="px-5">
                  <Link href='dashboard/followers' className={styles.follow +' '+ 'btn btn-primary'}>Explore</Link>
                </div>
              </div>
            </div>
          </div> <div className="col-sm-3 ">
            <div className={styles.headerCard +' '+ 'mb-2'}>
              <div className="d-flex justify-content-center align-items-center">
                <div className={styles.roundImage}>
                  {/* <img src="https://i.imgur.com/Mn9kglf.jpg" className="rounded-circle" width="97" /> */}
                  <Image src="../../../assets/dashboard/order.svg" className="rounded-circle" width={97} height={100} alt={'Products'}></Image>
                </div>
              </div>
              <div className="text-center">
                <h4 className="mt-3">Orders</h4>
                {/* <span>Account Manager</span> */}
                <div className="px-5">
                  <Link href='dashboard/orders' className={styles.follow +' '+ 'btn btn-primary'}>Explore</Link>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div>
    </>
  )
}

export default Dashboard