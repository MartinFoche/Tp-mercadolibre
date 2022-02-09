import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ProductDetail } from "../components/ProductDetail"


export const Detail = () => {

  const [finalSearch, setFinalSearch] = useState("");
  
    return (
        <>   
        <Navbar setFinalSearch={setFinalSearch}/>
        <ProductDetail/>
        </>
    )
  }