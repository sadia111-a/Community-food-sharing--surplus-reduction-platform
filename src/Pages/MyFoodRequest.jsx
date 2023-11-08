import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import RequestRow from "./RequestRow";
import Swal from "sweetalert2";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const url = `https://food-sharing-server-green.vercel.app/requests?email=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);
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
  return (
    <div>
      <Helmet>
        <title>Fresh Food | My Food Request</title>
      </Helmet>

      <div>
        <h2 className="text-2xl text-center mb-4 font-bold text-orange-950">
          Food Requests:{requests.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-bold">
                <th>Cancel Request</th>

                <th>Food Image</th>
                <th>Donar Name</th>
                <th>Pickup Location</th>
                <th>Request Date</th>
                <th>Donation Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests?.map((request) => (
                <RequestRow
                  key={request._id}
                  request={request}
                  handleDelete={handleDelete}
                ></RequestRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
