const Output = (props) => {
  console.log(props.inputs);
  return (
    <div>
      <h1>Products</h1>
      {props.inputs.map((i) => {
        return (
          <li key={i.id}>{`${i.id} - 
             ${i.price} - 
            ${i.name}`}
            <button onClick={() => props.onDelete(i.id)}>Delete order</button>
          </li>
        );
      })}
    </div>
  );
};

export default Output;
