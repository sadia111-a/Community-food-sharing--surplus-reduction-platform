import { Helmet } from "react-helmet-async";

const MyFoodRequest = () => {
  return (
    <div>
      <Helmet>
        <title>Fresh Food | My Food Request</title>
      </Helmet>
      <h2 className="text-2xl">This is my food request page</h2>
    </div>
  );
};

export default MyFoodRequest;
