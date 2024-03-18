import React,{useState} from 'react';
import './App.css';
import AdminForm from './Form/AdminForm';
import Output from './UI/Output';
import TotalSum from './UI/TotalSum';

function App() {
  const [enteredData,setEnteredData] = useState([]);
  const addProductHandler =(inp)=>{
    setEnteredData((prevInput) => {
      return [inp,...prevInput]
    })
  }
const deleteHandler =(id)=>{
  const updatedData = enteredData.filter((input) => input.id !== id)
  localStorage.removeItem(id)
  setEnteredData(updatedData)
}
 return(
  <div>
    <AdminForm onAddProduct={addProductHandler}/>
    <Output inputs={enteredData} onDelete ={deleteHandler}/>
    <TotalSum input1 ={enteredData}/>
  </div>
 )
 
}

export default App;
