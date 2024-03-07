import React from "react";

const CartItems = ({cart , onDelete}) => {
    const categories = [...new Set(cart.map(item => item.cat))];

    return (
        <div>
               {categories.map(category => (
        <div key={category}>
          <h2>Category: {category}</h2>
          <ul>
            {cart.filter(item => item.cat === category).map(product => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => onDelete(product.id)}>Delete Item</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
        </div>
    )
}

export default CartItems;