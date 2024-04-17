import { Link } from "react-router-dom";
import Head from "../../Layout/Head";

const Resgister = () => {
    const handleRegister=e=>{
        e.preventDefault();
        
    }
    return (
        <div>

        <Head title="Register" />;
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
                  placeholder="Your Name"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="url"
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
                  placeholder="Your email"
                  className="input input-bordered"
                  
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
                  
                />
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
