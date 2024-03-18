import React from "react";


const TotalSum = (props)=>{
 const totalSum = props.input1.reduce((acc,curr) => acc +parseInt(curr.price),0)

    return(
        <h3>Total value worth of products : {totalSum}</h3>
    )
};

export default TotalSum;