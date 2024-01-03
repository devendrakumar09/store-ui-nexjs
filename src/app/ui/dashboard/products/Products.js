import React from 'react'
import styles from './products.module.css'
const Products = () => {
    return (
        <>
            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row">
                    <div className="col-sm-3">
                        <div className={styles.card +' '+styles.card1+' '+ 'shadow border'} >
                            <div className="p-3 row justify-content-end">
                                <div className="fa fa-heart-o like"></div>
                            </div>
                            <div className={styles.productpic}>
                                <img className={styles.pic1} src="https://i.imgur.com/fP3NOTX.png" />
                            </div>
                            <small className={styles.category}>Backpacks</small>
                            <h5 className="product-name">TH Jeans City Backpack</h5>
                            <div className="row px-3 justify-content-between">
                                <p className="price">$79.<span className="sm-text">50</span></p>
                                <div className={styles.stars}>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className={styles.card +' '+styles.card1+' '+ 'shadow border'} >
                            <div className="p-3 row justify-content-end">
                                <div className="fa fa-heart-o like"></div>
                            </div>
                            <div className={styles.productpic}>
                                <img className={styles.pic1} src="https://i.imgur.com/fP3NOTX.png" />
                            </div>
                            <small className={styles.category}>Backpacks</small>
                            <h5 className="product-name">TH Jeans City Backpack</h5>
                            <div className="row px-3 justify-content-between">
                                <p className="price">$79.<span className="sm-text">50</span></p>
                                <div className={styles.stars}>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className={styles.card +' '+styles.card1+' '+ 'shadow border'} >
                            <div className="p-3 row justify-content-end">
                                <div className="fa fa-heart-o like"></div>
                            </div>
                            <div className={styles.productpic}>
                                <img className={styles.pic1} src="https://i.imgur.com/fP3NOTX.png" />
                            </div>
                            <small className={styles.category}>Backpacks</small>
                            <h5 className="product-name">TH Jeans City Backpack</h5>
                            <div className="row px-3 justify-content-between">
                                <p className="price">$79.<span className="sm-text">50</span></p>
                                <div className={styles.stars}>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className={styles.card +' '+styles.card1+' '+ 'shadow border'} >
                            <div className="p-3 row justify-content-end">
                                <div className="fa fa-heart-o like"></div>
                            </div>
                            <div className={styles.productpic}>
                                <img className={styles.pic1} src="https://i.imgur.com/fP3NOTX.png" />
                            </div>
                            <small className={styles.category}>Backpacks</small>
                            <h5 className="product-name">TH Jeans City Backpack</h5>
                            <div className="row px-3 justify-content-between">
                                <p className="price">$79.<span className="sm-text">50</span></p>
                                <div className={styles.stars}>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                     <div className="col-sm-3">
                        <div className={styles.card +' '+styles.card1+' '+ 'shadow border'} >
                            <div className="p-3 row justify-content-end">
                                <div className={styles.like +' '+'fa fa-heart-o'}></div>
                            </div>
                            <div className={styles.productpic}>
                                <img className={styles.pic1} src="https://i.imgur.com/fP3NOTX.png" />
                            </div>
                            <small className={styles.category}>Backpacks</small>
                            <h5 className={styles.productName}>TH Jeans City Backpack</h5>
                            <div className="row px-3 justify-content-between">
                                <p className={styles.price}>$79.<span className="sm-text">50</span></p>
                                <div className={styles.stars}>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star star-active"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Products