import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    const updateFoods = foods.filter((food) => food.id !== id)
    setFoods(updateFoods)
  }

  return (
    <div className="App" style={{backgroundColor:"white", color:"black"}}>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm setFoods={setFoods} />
      <FoodBox foods={foods} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
