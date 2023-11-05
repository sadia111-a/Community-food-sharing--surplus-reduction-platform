import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-bold space-y-5 text-center text-orange-950">
        Available Foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
