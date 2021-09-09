import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPLants] = useState([]);
  const [formInputs, setFormInputs] = useState({name: '', image: '', price: ''});
  const [query, setQuery] = useState('');

  function fetchPlants() {
    fetch(`http://localhost:6001/plants`)
    .then(resp => resp.json())
    .then(plantsArray => setPLants(plantsArray))
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  function handleFormInputs(e) {
    if(e.target.name === 'price') {
      setFormInputs({...formInputs, [e.target.name]: parseInt(e.target.value)})
    } else {
      setFormInputs({...formInputs, [e.target.name]: e.target.value})
    }
  };

  function handleFormSubmission() {
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formInputs)
    })
    fetchPlants();
  };

  function handleQuery(value) {
    setQuery(value)
  };

  function handleDelete(e) {
    console.log(e.target.id)
    fetch(`http://localhost:6001/plants/${e.target.id}`, {method: 'DELETE'})
    .then(fetchPlants())
  };

  const basePlantsArray = plants.filter(plant => {
    const name = plant.name.toLowerCase();
    return name.includes(query);
  });

  return (
    <main>
      <NewPlantForm formInputs={formInputs} 
                    handleFormInputs={handleFormInputs}
                    handleFormSubmission={handleFormSubmission} />
      <Search query={query} handleQuery={handleQuery} />
      <PlantList plants={basePlantsArray} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
