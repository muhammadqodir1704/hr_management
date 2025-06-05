import Card from "@/components/Card";
import SearchInput from "@/components/SearchInput";
import EmployeeItem from "@/components/EmployeeItem";

import { SlidersHorizontal, PlusIcon } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data = [
  {
    employeeId: 345321231,
    title: "Darlene Robertson",
    Department: "Design",
    Designation: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    employeeId: 987890345,
    title: "Floyd Miles",
    Department: "Developement",
    Designation: "PHP Developer",
    type: "Office",
    status: "Permanent",
  },
  {
    employeeId: 453367122,
    title: "Cody Fisher",
    Department: "Sales",
    Designation: "Sales Manager",
    type: "Office",
    status: "Permanent",
  },
  {
    employeeId: 345321231,
    title: "Dianne Russell",
    Department: "Sales",
    Designation: "BDM",
    type: "Remote",
    status: "Permanent",
  },
  {
    employeeId: 453677881,
    title: "Savannah Nguyen",
    Department: "Design",
    Designation: "Design Lead",
    type: "Office",
    status: "Permanent",
  },
  {
    employeeId: 9918765,
    title: "Jacob Jones",
    Department: "Developement",
    Designation: "Python Developer",
    type: "Remote",
    status: "Permanent",
  },
  {
    employeeId: 238870122,
    title: "Marvin McKinney",
    Department: "Developement",
    Designation: "Sr. UI Developer",
    type: "Remote",
    status: "Permanent",
  },
  {
    employeeId: 124335111,
    title: "Brooklyn Simmons",
    Department: "PM",
    Designation: "Project Manager",
    type: "Office",
    status: "Permanent",
  },
  {
    employeeId: 435540099,
    title: "Kristin Watson",
    Department: "HR",
    Designation: "HR Executive",
    type: "Office",
    status: "Permanent",
  },
  {
    employeeId: 9812890,
    title: "Kathryn Murphy",
    Department: "Developement",
    Designation: "React JS Developer",
    type: "Office",
    status: "Permanent",
  },
];

// const useEmployees = () =>
function AllEmployees() {
  return (
    <Card className="p-5 m-8">
      {/* employees top */}
      <div className="flex justify-between mb-[30px]">
        <SearchInput />
        <div className="flex gap-5">
          <button className="flex items-center gap-2 py-3 px-5 bg-primary-500 text-white rounded-[10px] cursor-pointer hover:shadow hover:shadow-blue-700">
            <PlusIcon className="border-2 rounded-full" />
            Add New Employee
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-[10px] items-center border border-gray-20 px-[22.5px] py-[13px] rounded-[10px] cursor-pointer">
              <SlidersHorizontal />
              <span>Filter</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Employee List */}
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between border-b border-b-gray-10">
          <div className="py-[10px]  w-[252px]">Employee Name</div>
          <p className="py-[10px]  w-[132px]">Employee ID</p>
          <p className="py-[10px]  w-[172px]">Department</p>
          <p className="py-[10px]  w-[162px]">Designation</p>
          <p className=" w-[112px]">Type</p>
          <div className="py-[10px] w-[110px]">Status</div>
          <div className="flex items-center gap-[10px]  w-[100px]">Action</div>
        </div>
        {data.map((item) => {
          return <EmployeeItem employee={item} />;
        })}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500">Showing</span>
            <select
              className="p-3 rounded-[10px] border border-gray-20 ml-5"
              name="pagenation-num"
              id="paginaiton-num"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <p className="text-gray-500 text-[13px]">
            Showing 1 to 10 out of 60 records
          </p>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#"></PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AllEmployees;
