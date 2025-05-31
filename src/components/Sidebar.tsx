import { Link, useLocation } from "react-router-dom";

const pages = [
  {
    name: "Dashboard",
    icon: "../assets/icons/Dashboard.svg",
    path: "/",
  },
  {
    name: "All Employees",
    icon: "../assets/icons/AllEmployees.svg",
    path: "/AllEmployees",
  },
  {
    name: "All Departments",
    icon: "../assets/icons/AllDepartments.svg",
    path: "/AllDepartments",
  },
  {
    name: "Attendance",
    icon: "../assets/icons/Attendance.svg",
    path: "/Attendance",
  },
  {
    name: "Payroll",
    icon: "../assets/icons/Payroll.svg",
    path: "/Payroll",
  },
  {
    name: "Jobs",
    icon: "../assets/icons/Jobs.svg",
    path: "/Jobs",
  },
  {
    name: "Candidates",
    icon: "../assets/icons/Candidates.svg",
    path: "/Candidates",
  },
  {
    name: "Leaves",
    icon: "../assets/icons/Leaves.svg",
    path: "/Leaves",
  },

  {
    name: "Holidays",
    icon: "../assets/icons/Holidays.svg",
    path: "/Holidays",
  },
  {
    name: "Settings",
    icon: "../assets/icons/settings.svg",
    path: "/Settings",
  },
];

function Sidebar() {
  const location = useLocation();
  return (
    <div className="p-[30px] rounded-[20px] bg-gray-500/5 w-[280px]">
      <Link to="/" className="mb-[30px] block">
        <img className="h-[50px]" src={"../assets/logo.svg"} alt="site logo" />
      </Link>
      <div className="flex flex-col gap-2.5">
        {pages.map((page, index) => {
          const activeLink = location.pathname === page.path;
          return (
            <Link
              key={index}
              to={page.path}
              className={`inline-flex items-center gap-4 ${
                activeLink && "bg-primary-500/5"
              } rounded-r-[10px]`}
            >
              <span
                className={`h-[50px] ${
                  activeLink && "bg-primary-500"
                } w-1.5 rounded-[10px]`}
              />
              <img src={page.icon} alt="name" />
              <span className="font-semibold text-sm">{page.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
