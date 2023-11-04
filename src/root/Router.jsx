import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/manageMyFood",
        element: <ManageMyFood></ManageMyFood>,
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest></MyFoodRequest>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
