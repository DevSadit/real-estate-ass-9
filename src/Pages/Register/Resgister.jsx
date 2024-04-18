import { Link } from "react-router-dom";
import Head from "../../Layout/Head";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Resgister = () => {
  const [showPass, setShowPass]= useState(false);
  const auth = getAuth(app)
  const { creatUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    if (!passwordPattern.test(password)) {
      toast.warn(`Write The Password Correctly`);
      console.log(
        `Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long`
      );
    } else {
      toast.success(`Registered succesfully!`);
      console.log("Password is valid.");
      creatUser(email, password)
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl,
          });
        })
        .catch((error) => console.log(error));
    }

    //
  };
  return (
    <div>
      <Head title="Register" />;<ToastContainer></ToastContainer>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Become a member in seconds!</h1>
            <p className="py-6">
              Unlock exclusive benefits by registering now with our website.
              Join our community to access seamless booking, personalized
              experiences, and exclusive offers. Start your journey today!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm border">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  name="imgUrl"
                  type="text"
                  placeholder="Image url"
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
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span className="absolute top-4 right-4" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt  text-base">
                    Already Have an Account?
                    <Link to="/login">
                      <span className="text-blue-600 link link-hover font-bold">
                        Login Now
                      </span>
                    </Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#41B06E] text-white text-xl">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resgister;
