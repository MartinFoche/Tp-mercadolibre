import React,{ useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetailItem, getItem } from "../services/apiMercadoLibre";

export const ProductDetail = () => {

    const [productDescription, setProductDescription] = useState(""); 
    const [product, setProduct] = useState({
        shipping:{free_shipping:""},
        pictures:[{url:""}]});

    const param = useParams();
    const {id} = param;

    useEffect(() => {
        if (id) {
           search();
           getProductById();
        }
    }, [id]);

    const search = async() => {
        const response = await getDetailItem(id); 
        setProductDescription(response.plain_text);
    }

    const getProductById = async() => {
        const response = await getItem(id);
        setProduct(response);
    }

    const {title, price, pictures, shipping, available_quantity} = product;
    const {url} = pictures[0];
    const {free_shipping} = shipping;

    return (
        <>
        <div className="card top-2 m-2 card-detail">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={url} className="img-fluid rounded-start img-detail ms-4 mt-4" alt="https://dues.com.mx/duesAdmin/assets/web-page/logos/defaultSF.png"/>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <div className="row">
                            <div className="col-auto">
                                <h3 className="card-text">$ {price}</h3> 
                            </div>
                            <div className="col-auto ms-4">
                                <button className="btn btn-primary btn-md">Comprar ahora</button>
                            </div>
                        </div>
                        {free_shipping && <p className="card-text"><small className="text-success"><b>Envio gratis</b></small></p>} 
                        <br/>
                        <p className="card-text">Stock Disponible: <b>{available_quantity}</b></p>
                        <p className="card-text">{productDescription}</p>
                    </div>
               </div>
            </div>
        </div>
        </>
    )
}