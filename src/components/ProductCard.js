import { Link } from "react-router-dom";
import React from "react";

export const ProductCard = ({product}) => {

    const {id, title, price, thumbnail, shipping} = product;
    const free_shipping = shipping;
  
    return (
        <>
        <h1></h1>
        <div className="card top-2 ms-2 me-2 card-product">
            <div className="row g-0">
                <Link className="col-md-4" to={`/product/detail/${id}`}>
                    <img src={thumbnail} className="img-fluid rounded-start pointer img-card" alt="https://dues.com.mx/duesAdmin/assets/web-page/logos/defaultSF.png"/>
                </Link>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link  className="link-text" to={`/product/detail/${id}`}>
                            <h5 className="card-title pointer">{title} </h5>
                        </Link>
                        <Link className="link-text" to={`/product/detail/${id}`}>
                            <h3 className="card-text pointer">$ {price}</h3>
                        </Link>
                        {free_shipping && <p className="card-text"><small className="text-success"><b>Envio gratis</b></small></p>} 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}