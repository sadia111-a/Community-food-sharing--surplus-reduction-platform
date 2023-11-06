import React from "react";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  return (
    <div>
      <Helmet>
        <title>Fresh Food | Add Food</title>
      </Helmet>
      <h2 className="text-2xl">This is add food page</h2>
    </div>
  );
};

export default AddFood;
