import React from 'react'
import FollowersUI from '@/app/ui/store/customers/Followers'
import ProfileUi from '@/app/ui/store/settings/profile/Profile'
import RatingUI from '@/app/ui/store/customers/rating/Rating'
const Followers = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex" >
          <div className="col-sm-7">
            <ProfileUi />
            <div className="mt-1">
              <FollowersUI />
            </div>
          </div>
          <div className="col-sm-5">
            <RatingUI />
          </div>
        </div>
      </div>
    </>
  )
}

export default Followers