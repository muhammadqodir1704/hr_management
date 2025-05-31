import Card from "@/components/Card";
import { DashboardChart } from "@/components/DashboardChart";
import { Calendar } from "@/components/ui/calendar";

// shadcn imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full p-[30px] flex lg:flex-row md:flex-col gap-5">
      <div className="grow">
        <div>
          <div className="grid grid-cols-2 gap-5">
            <Card className="overflow-hidden">
              <h2 className="flex items-center gap-[10px] m-4">
                <span className="w-10 h-10 bg-primary-5 rounded-[5px] p-[10px]">
                  <img src="../assets/icons/dashboard-users.svg" alt="" />
                </span>
                <span>Total Employee</span>
              </h2>
              <div className="flex justify-between items-center mt-[10px] mx-4">
                <h2 className="font-semibold text-[30px]">560</h2>
                <span className="rounded-[5px] bg-green-100 py-1 px-[5px] flex gap-[5px]">
                  <img src="../assets/icons/status-up.svg" alt="" />
                  <span className="text-green-400">12%</span>
                </span>
              </div>
              <div className="border-t border-gray-20 py-[10px] px-4 text-gray-500 mt-[10px]">
                Update: July 16, 2023
              </div>
            </Card>

            <Card className="overflow-hidden">
              <h2 className="flex items-center gap-[10px] m-4">
                <span className="w-10 h-10 bg-primary-5 rounded-[5px] p-[10px]">
                  <img src="../assets/icons/dashboard-users.svg" alt="" />
                </span>
                <span>Total Applicant</span>
              </h2>
              <div className="flex justify-between items-center mt-[10px] mx-4">
                <h2 className="font-semibold text-[30px]">1050</h2>
                <span className="rounded-[5px] bg-green-100 py-1 px-[5px] flex gap-[5px]">
                  <img src="../assets/icons/status-up.svg" alt="" />
                  <span className="text-green-400">12%</span>
                </span>
              </div>
              <div className="border-t border-gray-20 py-[10px] px-4 text-gray-500 mt-[10px]">
                Update: July 14, 2023
              </div>
            </Card>
            <Card className="overflow-hidden">
              <h2 className="flex items-center gap-[10px] m-4">
                <span className="w-10 h-10 bg-primary-5 rounded-[5px] p-[10px]">
                  <img src="../assets/icons/dashboard-users.svg" alt="" />
                </span>
                <span>Today Attendance</span>
              </h2>
              <div className="flex justify-between items-center mt-[10px] mx-4">
                <h2 className="font-semibold text-[30px]">470</h2>
                <span className="rounded-[5px] bg-red-100 py-1 px-[5px] flex gap-[5px]">
                  <img src="../assets/icons/status-down.svg" alt="" />
                  <span className="text-red-400">8%</span>
                </span>
              </div>
              <div className="border-t border-gray-20 py-[10px] px-4 text-gray-500 mt-[10px]">
                Update: July 14, 2023
              </div>
            </Card>
            <Card className="overflow-hidden">
              <h2 className="flex items-center gap-[10px] m-4">
                <span className="w-10 h-10 bg-primary-5 rounded-[5px] p-[10px]">
                  <img src="../assets/icons/dashboard-users.svg" alt="" />
                </span>
                <span>Total Employee</span>
              </h2>
              <div className="flex justify-between items-center mt-[10px] mx-4">
                <h2 className="font-semibold text-[30px]">250</h2>
                <span className="rounded-[5px] bg-green-100 py-1 px-[5px] flex gap-[5px]">
                  <img src="../assets/icons/status-up.svg" alt="" />
                  <span className="text-green-400">12%</span>
                </span>
              </div>
              <div className="border-t border-gray-20 py-[10px] px-4 text-gray-500 mt-[10px]">
                Update: July 10, 2023
              </div>
            </Card>
          </div>
        </div>
        <Card className="p-5 mt-5">
          <div className="flex justify-between mb-10">
            <h2 className="font-semibold text-[20px] text-dark-500 mt-[5px]">
              Attendance Overview
            </h2>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-[10px] py-[5px] px-[10px] rounded-[8px] border border-gray-10">
                Today
                <ArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>Yesterday</DropdownMenuItem>
                <DropdownMenuItem>This week</DropdownMenuItem>
                <DropdownMenuItem>Last week</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DashboardChart />
        </Card>
      </div>
      <Card className="p-5 w-[414px]">
        <div className="flex justify-between items-center">
          <h2 className="text-dark-500 font-semibold text-[20px]">
            My Schedule
          </h2>
          <div className="w-[40px] h-[40px] bg-primary-10 rounded-[10px] p-2 flex justify-center">
            <img src="../assets/icons/date.svg" alt="" />
          </div>
        </div>
        <div className="mx-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md w-[400px] inline-flex justify-center ml-auto"
          />
          <hr />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between pt-5 ">
              <h2 className="text-dark-500 text-[16px]">
                Wednesday, 06 July 2023
              </h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/lines.svg"
                alt="alt"
              />
            </div>
            <div className="flex gap-5">
              <h2 className="text-custom-gradient">09:30</h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/gradient-shape.png"
                alt="alt"
              />
              <div className="flex flex-col">
                <span>UI/UX Designer</span>
                <span>Practical Task Review</span>
              </div>
            </div>
            <div className="flex gap-5">
              <h2 className="text-custom-gradient">12:00</h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/gradient-shape.png"
                alt="alt"
              />
              <div className="flex flex-col">
                <span>Magento Developer</span>
                <span>Resume Review</span>
              </div>
            </div>
            <div className="flex gap-5">
              <h2 className="text-custom-gradient">01:30</h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/gradient-shape.png"
                alt="alt"
              />
              <div className="flex flex-col">
                <span>Sales Manager</span>
                <span>Final HR Round</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between pt-5">
              <h2 className="text-dark-500 text-[16px]">
                Thursday, 07 July 2023
              </h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/lines.svg"
                alt="alt"
              />
            </div>
            <div className="flex gap-5">
              <h2 className="text-custom-gradient">09:30</h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/gradient-shape.png"
                alt="alt"
              />
              <div className="flex flex-col">
                <span>Front end Developer</span>
                <span>Practical Task Review</span>
              </div>
            </div>
            <div className="flex gap-5">
              <h2 className="text-custom-gradient">11:00</h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/gradient-shape.png"
                alt="alt"
              />
              <div className="flex flex-col">
                <span>React JS</span>
                <span>TL Meeting</span>
              </div>
            </div>
            <div className="flex gap-5">
              <h2 className="text-custom-gradient">01:30</h2>
              <img
                className="cursor-pointer"
                src="../assets/icons/gradient-shape.png"
                alt="alt"
              />
              <div className="flex flex-col">
                <span>Sales Manager</span>
                <span>Final HR Round</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;
