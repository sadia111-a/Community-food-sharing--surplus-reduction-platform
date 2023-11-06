import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";

const ModalForm = () => {
  const [food, setFood] = useState([]);
  console.log(food);

  useEffect(() => {
    fetch(`http://localhost:5000/foods`)
      .then((res) => res.json())
      .then((data) => setFood(data[(0, 1, 2)]));
  }, []);
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
  const { user } = useContext(AuthContext);

  const handleRequestFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const food_img = form.food_img.value;
    const food_name = form.food_name.value;
    const donator_img = form.donator_img.value;
    const donator_name = form.donator_name.value;
    const food_quantity = form.food_quantity.value;
    const location = form.location.value;
    const expired_date = form.expired_date.value;
    const quality = form.quality.value;
    const foodRequest = {
      customerName: name,
      email,
      food_name,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(foodRequest);
    fetch("", {
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
          alert("Food requested successfully");
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
                    type="date"
                    name="date"
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
                    defaultValue={food_name}
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
                    defaultValue={food_img}
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
                    defaultValue={_id}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Donator</span>
                  </label>
                  <input
                    type="text"
                    name="donator_name"
                    placeholder="food donator name"
                    defaultValue={donator_name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Request Date</span>
                  </label>
                  <input
                    type="text"
                    name="request_date"
                    placeholder="date name"
                    defaultValue="date"
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
                    defaultValue={location}
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
                    name="donation"
                    placeholder="donation money"
                    defaultValue="money"
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