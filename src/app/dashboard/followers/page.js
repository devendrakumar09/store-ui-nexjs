import React from 'react'
import FollowersUI from '@/app/ui/dashboard/followers/Followers'
import ProfileUi from '@/app/ui/dashboard/followers/sideprofile/Profile' 
const Followers = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex" >
          <div className="col-sm-8">
            <ProfileUi />
            <div className="mt-1">
              <FollowersUI />
            </div>
          </div>          
        </div>
      </div>
    </>
  )
}

export default Followers