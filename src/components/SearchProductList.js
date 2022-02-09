import React,{ useEffect, useState } from "react";
import { searchItems } from "../services/apiMercadoLibre";
import { ProductCard } from "./ProductCard";

export const SearchProductList = ({query}) => {

    const [productsList, setProductList] = useState([]);

    useEffect(() => {
        if (query) {
           search();
        }
    }, [query]);

    const search = async() => {
        const response = await searchItems(query);
        setProductList(response.results);
    }

    return (
        <>
        {productsList.map(product => <ProductCard key={product.id} product={product}/>)}
        </>);
}