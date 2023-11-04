import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gradient-to-r from-green-400 to-lime-600 shadow-xl mb-3 rounded-md text-white">
      <div className="navbar text-orange-950">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/availableFoods"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Available Food
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/addFood"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Add Food
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/manageMyFood"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Manage My Food
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/myFoodRequest"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  My Food Request
                </NavLink>
              </li>

              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Register
                </NavLink>
              </li>
              <div className="text-black">{/* <DarkMode></DarkMode> */}</div>
            </ul>
          </div>
          <div className="lg:px-3 rounded-md font-extrabold text-lg text-red-500 lg:text-3xl">
            <img
              className="h-[90px] w-full rounded-md"
              src="https://i.ibb.co/PNH5006/derakvbg.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1 ">
            <li className="font-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="font-bold">
              <NavLink
                to="/availableFoods"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                Available Food
              </NavLink>
            </li>
            <li className=" font-bold">
              <NavLink
                to="/addFood"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                Add Food
              </NavLink>
            </li>
            <li className=" font-bold">
              <NavLink
                to="/manageMyFood"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                Manage My Food
              </NavLink>
            </li>
            <li className=" font-bold">
              <NavLink
                to="/myFoodRequest"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                My Food Request
              </NavLink>
            </li>

            <li className=" font-bold">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className=" font-bold">
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-950 bg-amber-100 py-2 px-3 text-sm rounded-md font-semibold"
                    : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center">
              <div className="mr-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="text-black text-sm lg:text-lg font-semibold">
                {user.displayName}
              </div>
              <button className="btn btn-sm ml-3" onClick={logOut}>
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div> */}
        <div className="navbar-end">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
