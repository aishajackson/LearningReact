import React from 'react'

function Product(props){
    return(
        <div>
            <h1>{props.item.name}</h1>
            <h3>${props.item.price}</h3>
            <h3>{props.item.description}</h3>
        </div>
        
    )
}

export default Product