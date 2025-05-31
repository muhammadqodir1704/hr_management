function handleSubmit(e) {
  e.preventDefault();
}

function LoginForm() {
  return (
    <div className="w-[445px]">
      <img
        className="h-[74px] w-[180px]"
        src="../assets/logo.svg"
        alt="site logo"
      />
      <div className="mt-10 mb-[30px]">
        <h2 className="font-semibold text-dark-500 text-[30px]">Welcome 👋 </h2>
        <p className="text-[16px] text-gray-500">Please login here</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="border border-primary-500 rounded-[10px] px-4 py-[7px] flex flex-col gap-[1px] mb-5">
          <label
            htmlFor="email"
            className="text-[11px] [font-weight:300;] text-primary-500"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            className="p-0 text-[16px] outline-0 [font-weight:300;]"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="border border-primary-500 rounded-[10px] px-4 py-[7px] flex flex-col gap-[1px]">
          <label
            htmlFor="password"
            className="text-[11px] [font-weight:300;] text-primary-500"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            className="p-0 text-[16px] outline-0 [font-weight:300;]"
            type="password"
            placeholder="Your password"
          />
        </div>
        <div className="flex justify-between mt-4 mb-[30px]">
          <div className="flex gap-[10px]">
            <input type="checkbox" id="remember" />
            <label
              htmlFor="remember"
              className="text-[16px] text-dark-500 [font-weight:300;]"
            >
              Remember me
            </label>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button className="py-4 bg-primary-500 text-white w-full rounded-[10px] cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
