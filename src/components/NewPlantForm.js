import React from "react";

function NewPlantForm({ formInputs, handleFormInputs, handleFormSubmission }) {
  const {name, image, price} = formInputs

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmission}>
        <input type="text" 
               name="name" 
               placeholder="Plant name" 
               value={name}
               onChange={e => handleFormInputs(e)}
        />
        <input type="text" 
               name="image" 
               placeholder="Image URL"
               value={image} 
               onChange={e => handleFormInputs(e)}
        />
        <input type="number" 
               name="price" 
               step="0.01" 
               placeholder="Price" 
               value={price}
               onChange={e => handleFormInputs(e)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
