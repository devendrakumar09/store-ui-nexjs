import React from 'react'
import OffersUi from '../../ui/dashboard/offers/Offers'
import Link from 'next/link'
import AddNewOfferUI from '@/app/ui/dashboard/offers/add/Add'

const Offers = () => {
  return (
    <>      
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-8">
              <OffersUi />
            </div>
            <div className="col-sm-4">
              <AddNewOfferUI />
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Offers