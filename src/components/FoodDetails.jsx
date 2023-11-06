import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FoodDetailsCard from "./FoodDetailsCard";

const FoodDetails = () => {
  const [food, setFood] = useState({});
  const { _id } = useParams();

  const allFood = useLoaderData();
  // console.log(allProduct);
  // console.log(_id);

  useEffect(() => {
    const findFood = allFood?.find((food) => food._id == _id);
    setFood(findFood);
  }, [_id, allFood]);
  // console.log(brand);
  return (
    <div>
      <FoodDetailsCard food={food}></FoodDetailsCard>
    </div>
  );
};

export default FoodDetails;
