import Image from 'next/image'
import React from 'react'
import styles from './add.module.css'
const Add = () => {
  return (
    <>
      <div class="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="row justify-content-center">

          </div>
          <div class="row">
            <div class="col-sm-8 border-line pb-3">
              <div className="card">
                <div className="card-body">
                  <h3 class="mb-4">Product Information</h3>

                  <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input type="text" class="form-control" />                      
                  </div>

                  <div class="mb-3">
                    <label  class="form-label">Description</label>                    
                    <textarea className='form-control' />                      
                  </div>
                  <div className="row">                  
                    <div class="mb-3 col-sm-7">
                      <label  class="form-label">Category</label>
                      <input type="text" class="form-control" />                      
                    </div>

                    <div class="mb-3 col-sm-5">
                      <label  class="form-label">Price</label>
                      <input type="text" class="form-control" />                      
                    </div>
                  </div>

                  <div className="row">                  
                    <div class="mb-3 col-sm-6">
                      <label  class="form-label">Shpping Charge </label>
                      <input type="text" class="form-control" />                      
                    </div>

                    <div class="mb-3 col-sm-6">
                      <label  class="form-label">Discount</label>
                      <input type="text" class="form-control" />                      
                    </div>
                  </div>

                  <div class="mb-3">
                    <label  class="form-label">Keyword </label>                    
                    <textarea className='form-control' />
                    <small>Seprate keywords with the help of <b>,</b></small>                      
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-4 ">              
              <div class="row justify-content-sm-center">
                <div className="card">
                  <div className="card-body">
                    <h3 class="mb-4">Images</h3>  
                      
                      <div className="row">
                        {/* <div className="mb-2">
                         <div className={styles.thumbnail +' '+ 'col-sm-12 border'}>
                          <Image alt='Thumbnail'  height={100} width={100} />                          
                         </div> 
                        </div> */}

                         <div className={styles.thumbnail +' '+'col-sm-12 border mb-2'}>
                          <Image alt='Thumbnail'  height={100} width={100} />
                        </div> 

                        <div className={styles.imageHolder +' '+'col-sm-4 border'}>
                          <Image alt='Image-holder'  height={100} width={100} />
                        </div> 

                        <div className={styles.imageHolder +' '+'col-sm-4 border'}>
                          <Image alt='Image-holder'  height={100} width={100} />
                        </div> 

                        <div className={styles.imageHolder +' '+'col-sm-4 border'}>
                          <Image alt='Image-holder'  height={100} width={100} />
                        </div>                     
                      </div>
                  </div>
                </div>

                <button type="button" className='btn btn-primary m-4 p-2'>Save</button>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add