import React from "react";
import {useNavigate} from "react-router";
export const Product = ({ id,name, price, image }) => {
    const navigate = useNavigate();
    // console.log("valor de id ",id)
    return (
        <div className="card">
            <img
                src={`${image}`}
                alt=""
                // height={100}
                // width="30%"
              />
            <h6>{name}</h6>
            <p>Precio: {price}</p>
           
            <button className="btn btn-primary" onClick={() => navigate("/product/"+id)}>Ver detalles</button>
            
        </div>
    );
}