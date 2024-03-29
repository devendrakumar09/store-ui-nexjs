import React from 'react'
import styles from './details.module.css'
import { BsPen, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
const Details = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className={styles.card}>
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <div className={styles.main_image}>
                <img src="https://i.imgur.com/TAzli1U.jpg" id="main_product_image" width="350" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 right-side">
              <small className="text-muted">Backpacks</small>
              <div className="d-flex justify-content-between align-items-center">
                <h3>IIlana</h3>
              </div>
              <div className={styles.content + ' ' + 'mt-2 pr-3'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua</p>
              </div>
              <h3>$430.99</h3>
              <div className={styles.ratings + ' ' + 'd-flex flex-row align-items-center'}>
                <div className="d-flex flex-row">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                </div>
                <span>441 reviews</span>
              </div>
              <div className="buttons d-flex flex-row mt-5 gap-3">
                <button className="btn btn-outline-dark">Delete</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">              
                <div className="card mt-5 mb-3 p-4">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="rating">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf/>
                      <BsStar />
                    </div>
                      <small className="text-muted">2 Days Ago</small>
                  </div>
                  <h5 className="mt-3">Figma Design Tool</h5>
                  <p className="text-muted">
                    Our elite teams build apps, responsive websites, bots any digital product that interacts with users for the world's leading companies.
                  </p>                 
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details