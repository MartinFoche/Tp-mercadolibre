import { useForm } from "../hooks/useForm";
import React from "react";


export const Navbar = ({setFinalSearch}) => {

  const [formValues, handleInputChange] = useForm({search:""}); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.search.trim().length >= 1) {
        setFinalSearch(formValues.search);
      
    }
  }

    return (<>
        <nav className="navbar navbar-dark bg-warning">
            <div className="container-fluid ms-0">
                <a className="navbar-brand" href="/"><img className="img-fluid" width={130} src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" alt="logoML"/></a>
                <form className="d-flex col-8" onSubmit={handleSubmit}>
                    <input className="form-control me-2"
                    autoComplete="off"
                    className="form-control" 
                    type="text" 
                    placeholder = "Buscar productos, marcas y más..."
                    name="search"
                    value={formValues.search}       
                    onChange={handleInputChange}/>

                    <button  className="btn btn-light" type="submit">
                        <img className="img-fluid" width={30} src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png" alt="lupa"/>
                    </button>
                </form>
            </div>
        </nav> 
    </>
    )
}