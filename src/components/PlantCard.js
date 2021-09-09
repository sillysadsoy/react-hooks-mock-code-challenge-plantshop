import React, { useState } from "react";

function PlantCard({ id, name, image="https://via.placeholder.com/400", price, stocked, handleDelete }) {
  const [isStocked, setIsStocked] = useState(stocked);
  const [adjustPrice, setPrice] = useState(price);
  const [newPrice, setNewPrice] = useState('')

  function handleStockClick(e) {
    fetch(`http://localhost:6001/plants/${e.target.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'stocked': !stocked
      })
    })
    .then(setIsStocked(previousIsStocked => !previousIsStocked))
  };

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <form>
      <p>Price: </p>
      <input type='text' placeholder={`$ ${adjustPrice}`} value={newPrice} ></input>
      </form>
      <button onClick={e => handleStockClick(e)} 
              className={isStocked ? 'stocked' : 'outofstock'} 
              id={id}
      >
        {isStocked ? 'In Stock' : 'Out of Stock'}
      </button>
      <br />
      <button className='delete' id={id} onClick={e => handleDelete(e)}>Delete</button>
    </li>
  );
}

export default PlantCard;
