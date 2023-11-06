import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const [searchFoodName, setSearchFoodName] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = foods.filter((food) =>
      food.food_name.toLowerCase().includes(searchFoodName.toLowerCase())
    );
    setFilteredFoods(filtered);
  };
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleSortByDate = () => {
    const sortedFoods = [...foods];
    sortedFoods.sort((a, b) => {
      const dateA = new Date(
        parseInt(a.expired_date.split("-")[2]),
        parseInt(a.expired_date.split("-")[1]) - 1,
        parseInt(a.expired_date.split("-")[0])
      );
      const dateB = new Date(
        parseInt(b.expired_date.split("-")[2]),
        parseInt(b.expired_date.split("-")[1]) - 1,
        parseInt(b.expired_date.split("-")[0])
      );
      return dateA - dateB;
    });
    setFilteredFoods(sortedFoods);
  };

  return (
    <div>
      <Helmet>
        <title>Fresh Food | Available Foods</title>
      </Helmet>
      <h2 className="text-5xl mb-4 font-bold space-y-5 text-center text-orange-950">
        Available Foods
      </h2>
      <div className=" mx-auto w-full lg:w-[80%] ml-30  px-20">
        <form onSubmit={handleSearch}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="food-name-search"
              className="block w-full p-4 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search here......."
              required
              value={searchFoodName}
              onChange={(e) => setSearchFoodName(e.target.value)}
            />
            <button
              type="submit"
              className="text-orange-950 absolute right-2.5 bottom-2.5 bg-lime-400 hover:bg-amber-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex justify-center mb-3">
          <button
            onClick={handleSortByDate}
            className="text-orange-950 bg-lime-400 hover:bg-amber-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-4 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
          >
            Sort by Expiration Date
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {filteredFoods.length > 0
          ? filteredFoods.map((food) => (
              <FoodCard key={food.food_name} food={food}></FoodCard>
            ))
          : foods.map((food) => (
              <FoodCard key={food.food_name} food={food}></FoodCard>
            ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
