import React,{useState} from "react";


const AdminForm =(props) => {
    const [productId ,setProductId] = useState('');
    const [produnctPrice,setProductPrice] = useState('');
    const [produnctName,setProductName] = useState('');


     const idChangeHandler =(event) => {
        setProductId(event.target.value);
     }
     const priceChangeHandler = (event) => {
        setProductPrice(event.target.value);
     }

     const nameChangeHandler = (event) => {
        setProductName(event.target.value);
     }

    const formSubmitHandler = (event) => {
         event.preventDefault();
         const obj = {
            id: productId,
            price: produnctPrice,
            name:produnctName,
         }
         localStorage.setItem(obj.id,JSON.stringify(obj));
         props.onAddProduct(obj)
         setProductId('');
         setProductPrice('');
         setProductName('');
    }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={idChangeHandler}
        />
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={produnctPrice}
          min="0.00"
          onChange={priceChangeHandler}
        />
        <label htmlFor="productId">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={produnctName}
          onChange={nameChangeHandler}
        />
        <button type="submit">Add To Cart</button>
      </form>
    </div>
  );
};
export default AdminForm;