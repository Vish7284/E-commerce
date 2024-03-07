import React,{useState} from "react";


const AdminForm =(props) => {
    const [productId ,setProductId] = useState('');
    const [produnctPrice,setProductPrice] = useState('');
    const [produnctName,setProductName] = useState('');
    const [chooseCat,setChooseCat] = useState('');


     const idChangeHandler =(event) => {
        setProductId(event.target.value);
     }
     const priceChangeHandler = (event) => {
        setProductPrice(event.target.value);
     }

     const nameChangeHandler = (event) => {
        setProductName(event.target.value);
     }
     const catChangeHandler =(event) =>{
        setChooseCat(event.target.value);
     }

    const formSubmitHandler = (event) => {
         event.preventDefault();
         const obj = {
            id: productId,
            price: produnctPrice,
            name:produnctName,
            cat:chooseCat
         }
         localStorage.setItem(obj.id,JSON.stringify(obj))
         console.log(productId,produnctPrice,produnctName,chooseCat);
         props.onAdding(productId,produnctPrice,produnctName,chooseCat)
         setProductId('');
         setProductPrice('');
         setProductName('');
         setChooseCat('');
    }

  return (
    <div>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="productId">Product ID:</label>
            <input type = "text" id="productId" value={productId} onChange={idChangeHandler}/>
            <label htmlFor="productPrice">Product Price:</label>
            <input type = "number" id="productPrice" value = {produnctPrice} min= "0.00" onChange={priceChangeHandler}/>
            <label htmlFor="productId">Product Name:</label>
            <input type = "text" id="productName" value={produnctName} onChange={nameChangeHandler} />
            <label htmlFor="category">Choose a Category:</label>
            <select id="category" onChange={catChangeHandler} value={chooseCat}>
                <option value="1">Electronics</option>
                <option value="2">Skin care</option>
                <option value="3">Toys</option>
                <option value="4">Food Items</option>
            </select>
            <button type="submit">Add To Cart</button>
        </form>
    </div>
  )
};
export default AdminForm;