import { useContext } from "react";
import Head from "../../Layout/Head";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      <Head title="Update Profile" />
      <div>
        <form>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-7xl">Update Profile</p>
            </div>
            <div className="grid grid-cols-6 grid-flow-col gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={user.displayName}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Email:
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder={user.email}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Photo Url:
                </label>
                <input
                  name="pUrl"
                  type="text"
                  placeholder={user.photoURL}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
            <button
              className="btn bg-green-500 text-white font-bold text-xl"
            >
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
