type Employee = {
  employeeId: number;
  title: string;
  Department: string;
  Designation: string;
  type: string;
  status: string;
};

type Props = {
  employee: Employee;
};

function EmployeeItem({ employee }: Props) {
  const { title, type, Department, Designation, employeeId, status } = employee;
  return (
    <div className="border-b border-b-gray-10 flex justify-between items-center text-dark-500 [font-weight:300] text-[16px]">
      <div className="flex items-center gap-[10px] py-1 w-[252px]">
        <img src="../assets/user-pic.png" alt="user pic" />
        <span className="py-[10px] ">{title}</span>
      </div>
      <p className=" w-[132px]">{employeeId}</p>
      <p className=" w-[172px]">{Department}</p>
      <p className=" w-[162px]">{Designation}</p>
      <p className=" w-[112px]">{type}</p>
      <div className="py-[10px] pr-8 w-[110px]">
        <span className="text-primary-500 bg-primary-10 px-2 py-[3px] rounded-lg">
          {status}
        </span>
      </div>
      <div className="flex items-center gap-[10px] w-[100px]">
        <img
          className="cursor-pointer hover:animate-bounce [animation-duration:10s]"
          src="../assets/icons/eye-icon.svg"
          alt="icon"
        />
        <img
          className="cursor-pointer hover:animate-bounce [animation-duration:10s]"
          src="../assets/icons/pen-icon.svg"
          alt="icon"
        />
        <img
          className="cursor-pointer hover:animate-bounce [animation-duration:10s]"
          src="../assets/icons/trash-icon.svg"
          alt="icon"
        />
      </div>
    </div>
  );
}

export default EmployeeItem;
