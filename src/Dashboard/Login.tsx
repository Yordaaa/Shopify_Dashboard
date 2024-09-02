function Login() {
  return (
    <section>
      <div className="flex flex-col items-center mt-10 px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold  text-gray-900 md:text-2xl flex">
              Hey Admin
            </h1>
            <form className="space-y-4 md:space-y-6">
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
                    id="password"
                    placeholder="Enter password"
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-gray-800 hover:opacity-90 transition-all duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
