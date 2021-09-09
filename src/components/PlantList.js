import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete }) {
  const plantListItems = plants.map(plant => 
  <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} stocked={plant.stocked} handleDelete={handleDelete} />)

  return (
    <ul className="cards">{plantListItems}</ul>
  );
}

export default PlantList;
