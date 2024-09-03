import { useDispatch } from "react-redux";
import { ErrorResponse, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/Features/authApiSlice";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { successMessage } from "./types";
import { setCredentials } from "../Redux/Features/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if ("data" in res) {
        const { data } = res as { data: successMessage };
        if (data.success) {
          toast.success("Signed in successfully");
          setEmail("");
          setPassword("");
          dispatch(setCredentials(data.userInfo));
          navigate("/");
        }
      } else {
        const { error } = res as { error: ErrorResponse };
        toast.error(error.data.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };
  return (
    <section>
      <div className="flex flex-col items-center mt-20 px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold  text-gray-900 md:text-2xl flex">
              WellCome to Maveko Admin Panel
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="relative items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="flex">
                  <div className="fas fa-envelope text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="flex items-center relative">
                  <div className="fas fa-lock text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="Enter password"
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-gray-800 hover:opacity-90 transition-all duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading ? "Please wait.." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
