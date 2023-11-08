import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
  const [top6Foods, setTop6Foods] = useState([]);
  useEffect(() => {
    fetch("https://food-sharing-server-green.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        // Sort the data by food quantity in descending order
        data.sort((a, b) => b.food_quantity.localeCompare(a.food_quantity));

        // Get the top 6 food items
        const top6 = data.slice(0, 6);

        setTop6Foods(top6);
      });
  }, []);
  return (
    <div className="space-y-10 mt-12">
      <h2 className="text-5xl font-bold space-y-5 text-center text-orange-950">
        Our Featured Foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {top6Foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="text-center ">
        <Link
          to="/availableFoods"
          className="btn btn-success bg-green-500 text-orange-900 mb-8"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFood;
