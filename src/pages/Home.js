import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SearchProductList } from "../components/SearchProductList";
import { Welcome } from "../components/Welcome";

export const Home = () => {

  const [finalSearch, setFinalSearch] = useState("");
  
    return (
        <>
        <Navbar setFinalSearch={setFinalSearch}/>
        {finalSearch === "" ? <Welcome/> : <SearchProductList query={finalSearch}/>}
        </>
    )
}