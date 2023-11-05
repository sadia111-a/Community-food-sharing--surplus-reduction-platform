import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="text-center flex gap-5 ">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-block bg-green-500 text-orange-950 hover:text-black btn-sm"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
