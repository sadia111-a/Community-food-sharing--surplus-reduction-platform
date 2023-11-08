import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const food_img = form.food_img.value;
    const food_name = form.food_name.value;
    const donator_img = form.donator_img.value;
    const donator_name = form.donator_name.value;
    const food_quantity = form.food_quantity.value;
    const location = form.location.value;
    const expired_date = form.expired_date.value;
    const quality = form.quality.value;

    const email = user?.email;
    const newFood = {
      food_img,
      food_name,
      donator_img,
      donator_name,
      food_quantity,
      location,
      expired_date,
      quality,
    };
    console.log(newFood);
    // send data to the server
    fetch("https://food-sharing-server-green.vercel.app/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-amber-50 p-24">
      <Helmet>
        <title>Fresh Food | Add Food</title>
      </Helmet>
      <h2 className="text-3xl text-center font-extrabold text-orange-950 mb-8">
        Add Food
      </h2>

      <form onSubmit={handleAddFood}>
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
                placeholder="Food Image"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Food quantity and pickup location row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Quantity of food"
                name="food_quantity"
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
                placeholder="pickup location"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form expired date and food quality row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Expired Date</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Expired Date of food"
                name="expired_date"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Food Quality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quality"
                placeholder="Quality of food"
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
        {/* form Donator email and food status row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Donator Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                value={user?.email}
                placeholder="donator email"
                name="email"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodStatus"
                value="Available"
                placeholder="Available"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Food"
          className="btn btn-block bg-lime-400 font-bold text-orange-950 hover:bg-amber-100"
        />
      </form>
    </div>
  );
};

export default AddFood;
