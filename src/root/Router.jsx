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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FoodDetails from "../components/FoodDetails";
import UpdateFood from "../components/UpdateFood";
import ManageSingleFood from "../components/ManageSingleFood";

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
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFood",
        element: (
          <PrivateRoute>
            <ManageMyFood></ManageMyFood>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:_id",
        element: <UpdateFood></UpdateFood>,
        loader: () => fetch(`http://localhost:5000/foods`),
      },
      {
        path: "/manage/:_id",
        element: <ManageSingleFood></ManageSingleFood>,
        loader: () => fetch(`http://localhost:5000/foods`),
      },
      {
        path: "/details/:_id",
        element: <FoodDetails></FoodDetails>,
        loader: () => fetch(`http://localhost:5000/foods`),
      },
    ],
  },
]);
export default router;
