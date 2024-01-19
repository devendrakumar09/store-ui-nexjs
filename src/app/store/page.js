import React from 'react'
import styles from '../ui/store/store.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CardUI from '@/app/ui/store/cards/Card'
const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-6">
            <CardUI title="Product" number={50} />
          </div>
          <div className="col-sm-3 col-6">
            <CardUI title="Offers" number={5} />
          </div>
          <div className="col-sm-3 col-6">
            <CardUI title="Followes" number={'50.6k'} />
          </div>
          <div className="col-sm-3 col-6">
            <CardUI title="Orders" number={60} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard