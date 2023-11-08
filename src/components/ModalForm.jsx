import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const ModalForm = ({ food }) => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );
  const handleDateChange = (event) => {
    setCurrentDate(event.target.value);
  };

  const {
    _id,
    food_img,
    food_name,

    donator_name,

    location,

    quality,
  } = food || {};
  const { user } = useContext(AuthContext);

  const handleRequestFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const date = form.date.value;
    const email = user?.email;
    const food_img = form.food_img.value;
    const food_name = form.food_name.value;
    const donator_name = form.donator_name.value;
    const location = form.location.value;
    const quality = form.quality.value;
    const money = form.money.value;
    const foodRequest = {
      food_img,
      email,
      foodName: food_name,

      donatorName: donator_name,
      location: location,
      quality: quality,
      date,
      donation_money: money,

      food_id: _id,
    };
    console.log(foodRequest);
    fetch("http://localhost:5000/requests", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food requested successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-3/4">
          <div>
            <h2 className="text-2xl text-center font-bold">
              Request Food:{food_name}
            </h2>

            <form onSubmit={handleRequestFood} className="card-body">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="text"
                    id="dateInput"
                    name="date"
                    value={currentDate}
                    onChange={handleDateChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <input
                    type="text"
                    name="food_name"
                    placeholder="food name"
                    value={food_name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Image</span>
                  </label>
                  <input
                    type="text"
                    name="food_img"
                    placeholder="food image"
                    value={food_img}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Id</span>
                  </label>
                  <input
                    type="text"
                    name="_id"
                    placeholder="food id"
                    value={_id}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Donator Name</span>
                  </label>
                  <input
                    type="text"
                    name="donator_name"
                    placeholder="food donator name"
                    value={donator_name}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="pickup location"
                    value={location}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quality of food</span>
                  </label>
                  <input
                    type="text"
                    name="quality"
                    placeholder="quality"
                    defaultValue={quality}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Donation Money</span>
                  </label>
                  <input
                    type="text"
                    name="money"
                    placeholder="money"
                    // defaultValue="money"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn btn-primary hover:bg-amber-100 bg-lime-400 text-orange-950 border-0"
                  type="submit"
                  value="Request"
                />
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalForm;
