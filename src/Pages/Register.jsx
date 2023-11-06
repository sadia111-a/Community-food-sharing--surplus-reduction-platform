import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    // validation
    if (password.length < 6) {
      swal("Error!", " please give 6 characters password!", "error");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal(
        "Error!",
        " Password must contain at least one capital letter!",
        "error"
      );
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      swal(
        "Error!",
        "Password must contain at least one special character!",
        "error"
      );
      return;
    }
    // create a new user
    createUser(email, password)
      .then((res) => {
        handleUpdateProfile(name, photo).then(() => {
          swal("Good job!", "user created successfully", "success");
          navigate("/");
        });
      })
      .catch((error) => {
        swal("Error!", " please register again!", error);
      });
  };
  return (
    <div
      className="hero min-h-screen bg-base-200 bg-opacity-60 bg-gradient-to-r from-[#151515] to-[
        rgba(21, 21, 21, 0.00)]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/NVR9SzD/pexels-photo-5638732.jpg)",
      }}
    >
      <Helmet>
        <title>Fresh Food | Register</title>
      </Helmet>
      <div className="hero-content flex-col ">
        <div className="text-center "></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-amber-100">
            <h1 className="text-4xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-green-500 border-0 text-orange-950 font-semibold">
                  Register
                </button>
              </div>
            </form>
            <p>
              Already have acount? please
              <Link to="/login">
                <button type="submit" className="btn btn-link text-orange-950">
                  Login
                </button>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
