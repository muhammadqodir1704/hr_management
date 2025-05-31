import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="p-[30px] flex justify-between">
      <div>
        <h2 className="font-semibold text-[20px] text-dark-500">
          Hello Robert 👋🏻
        </h2>
        <p className="text-gray-500 text-[14px]">Good Morning</p>
      </div>
      <div className="flex gap-[20px] items-center">
        {/* Search input */}
        <div className="px-4 py-3 rounded-[10px] border border-gray-90/10 flex gap-2.5 items-center">
          <img src="../assets/icons/Search-icon.svg" alt="" />
          <input className="outline-0" type="text" placeholder="Search" />
        </div>
        <div className="p-3 rounded-[10px] w-[50px] h-[50px] bg-gray-10 cursor-pointer">
          <img src="../assets/icons/notification.svg" alt="notification icon" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1.5 p-[5px] rounded-[8px] border border-gray-10">
            <img src="../assets/header-user.png" alt="" />
            <span className="lg:flex-col hidden lg:flex">
              <span className="font-semibold text-dark-500 text-[16px]">
                Robert Allen
              </span>
              <span className="text-gray-500 font-[300]">HR Manager</span>
            </span>
            <img src="../assets/icons/direction-down.svg" alt="" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <img src="../assets/icons/user.svg" alt="user icon" />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <img src="../assets/icons/logout.svg" alt="logout icon" />
              <span className="text-red-400 hover:text-red-500">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
