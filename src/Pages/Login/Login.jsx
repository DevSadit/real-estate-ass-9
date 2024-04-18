import { Link } from "react-router-dom";
import Head from "../../Layout/Head";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const { loginUser } = useContext(AuthContext);
  const [user, setUser] = useState('');
  // email login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => result.user)
      .catch((error) => console.log(error.message));
  };

  // Google login
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const googleUser = result.user;
        setUser(googleUser)

      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // facebook login
  const handleFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const fbUser = result.user;
        setUser(fbUser)
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <Head title="Login" />
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6">
            Welcome to Connect Corner, your exclusive gateway to seamless access
            and personalized experiences within our community. Log in here to
            unlock a world of convenience, where booking your perfect stay is
            just a click away. Join us now and explore your next adventure!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm border">
          <form onSubmit={handleLogin} className="card-body">
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
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt  text-base">
                  New Here?
                  <Link to="/register">
                    <span className="text-blue-600 link link-hover font-bold">
                      Register Now
                    </span>
                  </Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#41B06E] text-white text-xl">
                Login
              </button>
              <p className="my-4 text-center">Login with social accounts</p>
              <div className="flex mx-auto gap-x-7 ">
                <button onClick={handleGoogle}>
                  <FaGoogle className="text-3xl" />
                </button>
                <button onClick={handleFacebook}>
                  <FaFacebook className="text-3xl" />
                </button>
              </div>
            </div>
            <h1>{user.displayName}</h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
