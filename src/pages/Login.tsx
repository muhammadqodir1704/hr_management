import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center gap-[50px] mx-auto m-[30px]">
      <div className="bg-primary-5 rounded-[30px] py-[93px] pl-[130px]">
        <img src="../assets/Login-dashboard.png" alt="" />
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
}

export default Login;
