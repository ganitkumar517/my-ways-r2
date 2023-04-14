import React, { useState,useEffect } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [foodTypeFilter, setFoodTypeFilter] = useState("");
  const [maxDeliveryTimeFilter, setMaxDeliveryTimeFilter] = useState("");

  useEffect(() => {
    let filteredList = [...foods];

    if (foodTypeFilter !== "") {
      filteredList = filteredList.filter((food) => food.foodType === foodTypeFilter);
    }

    if (maxDeliveryTimeFilter !== "") {
      filteredList = filteredList.filter((food) => food.maxDeliveryTime == maxDeliveryTimeFilter);
    }

    setFilteredFoods(filteredList);
  }, [foods, foodTypeFilter, maxDeliveryTimeFilter]);


  const handleFoodTypeFilterChange = (event) => {
    setFoodTypeFilter(event.target.value);
  };

  const handleMaxDeliveryTimeFilterChange = (event) => {
    setMaxDeliveryTimeFilter(event.target.value);
  };
  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleMaxDeliveryTimeChange = (event) => {
    setMaxDeliveryTime(event.target.value);
  };

  const handleAddFood = (event) => {
    event.preventDefault();
    const newFood = { foodName, foodType, maxDeliveryTime };
    setFoods([...foods, newFood]);
    localStorage.setItem("foods", JSON.stringify([...foods, newFood]));
    setFoodName("");
    setFoodType("");
    setMaxDeliveryTime("");
  };
  
  return (
    <div className="main">
      <section className="s1">
      <h1>Food App</h1>
      <form onSubmit={handleAddFood}>
        <label>
          Food Name:
          <input type="text" value={foodName} onChange={handleFoodNameChange} />
        </label>
        <br />
        <label>
          Food Type:
          <select value={foodType} onChange={handleFoodTypeChange}>
            <option value="">Select Food Type</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <br />
        <label>
          Max Delivery Time (minutes):
          <input type="number" value={maxDeliveryTime} onChange={handleMaxDeliveryTimeChange} />
        </label>
        <br />
        <button type="submit">Add Food</button>
      </form>
    </section>
    <section className="s2">
    <div>
      <h2>Foods List</h2>
      <div>
        <label>
          Filter by Food Type:
          <select value={foodTypeFilter} onChange={handleFoodTypeFilterChange}>
            <option value="">All</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <label>
          Filter by Max Delivery Time:
          <input type="number" value={maxDeliveryTimeFilter} onChange={handleMaxDeliveryTimeFilterChange} />
        </label>
      </div>
      <ul>
        {filteredFoods.map((food, index) => (
          <li key={index}>
            {food.foodName} ({food.foodType}, {food.maxDeliveryTime} mins)
          </li>
        ))}
      </ul>
    </div>
    </section>
    </div>
  );
}

export default App;