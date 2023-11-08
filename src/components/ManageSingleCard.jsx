const ManageSingleCard = ({ request, handleDelete }) => {
  const {
    _id,
    food_img,
    email,
    foodName,
    location,
    date,
    donation_money,
    donatorName,
    // donator_img,
  } = request || {};
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-full w-24 h-24">
            {food_img && (
              <img src={food_img} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td>{donatorName}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>${donation_money}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Available</button>
      </th>
    </tr>
  );
};

export default ManageSingleCard;
