import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_img,
    food_name,
    donator_img,
    donator_name,
    food_quantity,
    location,
    expired_date,
    quality,
  } = food || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img
          src={food_img}
          alt="Shoes"
          className="rounded-xl h-[300px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food Name: {food_name}</h2>
        <p className="font-medium">Food Quantity: {food_quantity}</p>
        <p className="font-medium">Pickup Location:{location}</p>
        <p className="font-medium">Expired Date: {expired_date}</p>
        <p className="font-medium">Food Quality: {quality}</p>
        <div className="card-actions flex items-center">
          <img className="rounded-full h-[76px]" src={donator_img} alt="" />
          <span className="font-semibold text-orange-900">
            Donator: {donator_name}
          </span>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-block border-none font-semibold hover:bg-green-500 text-orange-950 bg-amber-100">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
