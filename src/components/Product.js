import React from "react"

function Product(props){
    return(
        <div>
            <h2>{props.details.name}</h2>
            <p>{props.details.price.toLocaleString("en-US", {style:"currency",currency:"INR"})}     -    {props.details.description}</p>
        </div>
    )
}

export default Product