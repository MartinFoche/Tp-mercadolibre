import img from "../assets/MercadoLibre.png";
import React from "react";
export const Welcome = () => {
    

    return (
        <>
        <div className="container-home position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
                <img src={img} className="img-detail" alt="no-image"/>
                <h1 className="title-logo">¡Bienvenidos!</h1>
            </div>
        </div>
        </>
    )
}