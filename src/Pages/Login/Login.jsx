import { Link } from "react-router-dom";
import Head from "../../Layout/Head";

const Login = () => {
  return (
    <div className="hero min-h-screen" >
      <Head title="Login" />
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Connect Corner</h1>
          <p className="py-6">
            Welcome to Connect Corner, your exclusive gateway to seamless access
            and personalized experiences within our community. Log in here to
            unlock a world of convenience, where booking your perfect stay is
            just a click away. Join us now and explore your next adventure!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm border">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
