import React,{useState} from 'react';
import './App.css';
import AdminForm from './Form/AdminForm';
import CartItems from './UI/CartItems';

function App() {
  const [cartList , setCartList] = useState([])

  const addingChangeHandler = (Id , Price ,Name,Cat) => {
    setCartList((prevItem) => [...prevItem,{id:Id, price:Price, name:Name,cat:Cat}])
    console.log(cartList);
    
  }
  const deleteItemHandler = (id) => {
    const updatedCart = cartList.filter(item => item.id !== id);
    setCartList(updatedCart);
    localStorage.removeItem(id);
  };
  return (
    <div>  
      <AdminForm onAdding={addingChangeHandler}/>
      <h1>Products</h1>
      <CartItems cart = {cartList } onDelete={deleteItemHandler}/>
    </div>
  );
}

export default App;
