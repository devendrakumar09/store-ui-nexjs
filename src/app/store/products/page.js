import React from "react";
import AllProducts from "../../ui/store/products/Products";
import styles from '../../ui/store/products/products.module.css'
import { BsNewspaper, BsTags } from "react-icons/bs";
import Link from "next/link";
const Products = () => {
  return (
    <>   
      <section className="button-style">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 center-col text-end">
                <Link href={'/dashboard/products/add'} className="btn btn-outline-dark p-2 m-2">New</Link>     
                <button type="button" className="btn btn-outline-dark p-2 m-2">Published </button>                
                <button type="button" className="btn btn-outline-dark p-2 m-2"><BsTags />  Fetured </button>                
                <button type="button" className="btn btn-outline-dark p-2 m-2">Unpublished </button>
                <button type="button" className="btn btn-outline-dark p-2 m-2">Top Rated </button>
                <button type="button" className="btn btn-outline-dark p-2 m-2">Reported </button>
            </div>
          </div>
        </div>
      </section>
      <Link href={'/dashboard/products/sduishd'}>
        <AllProducts />
      </Link>
    </>
  );
};

export default Products;
