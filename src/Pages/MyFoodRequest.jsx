import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import RequestRow from "./RequestRow";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const url = `http://localhost:5000/requests?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/requests/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successful");
            const remaining = requests.filter((request) => request._id !== id);
            setRequests(remaining);
          }
        });
    }
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
