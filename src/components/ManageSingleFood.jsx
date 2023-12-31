import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import ManageSingleCard from "./ManageSingleCard";

const ManageSingleFood = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const url = `https://food-sharing-server-green.vercel.app/requests?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [url]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-sharing-server-green.vercel.app/requests/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your request has been deleted.",
                "success"
              );
              const remaining = requests.filter(
                (request) => request._id !== id
              );
              setRequests(remaining);
            }
          });
      }
    });
  };

  const handleDelivered = (id) => {
    fetch(`https://food-sharing-server-green.vercel.app/requests/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "delivered" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update status
          const remaining = requests.filter((request) => request._id !== id);
          const updated = requests.find((request) => request._id == id);
          updated.status = "delivered";
          const newRequests = [updated, ...remaining];
          setRequests(newRequests);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Fresh Food | Manage Single Request</title>
      </Helmet>

      <div>
        <h2 className="text-2xl text-center mb-4 font-bold text-orange-950">
          Manage Food:{requests.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-bold">
                <th>Cancel Request</th>
                <th>Requester Food Image</th>
                <th>Requester Name</th>
                <th>Requester Email</th>
                <th>Request Date</th>
                <th>Donation Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests?.map((request) => (
                <ManageSingleCard
                  key={request._id}
                  request={request}
                  handleDelete={handleDelete}
                  handleDelivered={handleDelivered}
                ></ManageSingleCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleFood;
