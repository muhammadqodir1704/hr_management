import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  AllDepartments,
  AllEmployees,
  Attendance,
  Candidates,
  Dashboard,
  Holidays,
  Jobs,
  Leaves,
  Login,
  Payroll,
  Settings,
} from "./pages";
import LoginForm from "./components/LoginForm";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/AllEmployees",
          element: <AllEmployees />,
        },
        {
          path: "/AllDepartments",
          element: <AllDepartments />,
        },
        {
          path: "/Attendance",
          element: <Attendance />,
        },
        {
          path: "/Payroll",
          element: <Payroll />,
        },
        {
          path: "/Jobs",
          element: <Jobs />,
        },

        {
          path: "/Candidates",
          element: <Candidates />,
        },
        {
          path: "/Leaves",
          element: <Leaves />,
        },

        {
          path: "/Holidays",
          element: <Holidays />,
        },
        {
          path: "/Settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      children: [
        {
          index: true,
          element: <LoginForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
