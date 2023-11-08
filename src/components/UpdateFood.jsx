import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
  const { user } = useContext(AuthContext);
  const allFood = useLoaderData();
  console.log(allFood);

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
  } = allFood || {};

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const food_img = form.food_img.value;
    const food_name = form.food_name.value;

    const food_quantity = form.food_quantity.value;
    const location = form.location.value;
    const expired_date = form.expired_date.value;
    const quality = form.quality.value;

    const email = user?.email;
    const updatedFood = {
      food_img,
      food_name,
      donator_img,
      donator_name,
      food_quantity,
      location,
      expired_date,
      quality,
    };
    console.log(updatedFood);
    // send data to the server
    fetch(`http://localhost:5000/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Food Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <Helmet>
        <title>Brand-Shop || UpdateProduct</title>
      </Helmet>
      <h2 className="text-3xl text-center font-extrabold mb-8">
        Update Product:{name}
      </h2>

      <form onSubmit={handleUpdateFood}>
        {/* form Food Name and Food Image */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Food Name"
                name="food_name"
                defaultValue={food_name}
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="food_img"
                defaultValue={food_img}
                placeholder="food img"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Food quantity and pickup location row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Food Quantity"
                name="food_quantity"
                defaultValue={food_quantity}
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="location"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form expired date and food quality row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Expire Date</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="expired date"
                name="expired_date"
                defaultValue={expired_date}
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Quality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quality"
                defaultValue={quality}
                placeholder="quality"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Donator img and name row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Donator Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                value={user?.photoURL}
                placeholder="donator image"
                name="donator_img"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Donator Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                value={user?.displayName}
                name="donator_name"
                placeholder="donator name"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Product"
          className="btn btn-block bg-cyan-500 font-bold text-white hover:bg-cyan-700"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
