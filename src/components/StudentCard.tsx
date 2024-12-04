import React from "react";
import UserIcon from "../assets/images/Profile Icon.webp"
interface StudentCardProps {
    student: { name: string; age: number; attendance: string; grade: string; department: string ; totalMark:string};
  onClick: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onClick }) => {
  return (
        <div className="flex justify-center min-h-screen font-open-sans text-[#786450] mt-8 mr-5 ml-9">
      <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[400px] rounded-md shadow-lg bg-gradient-to-tr from-[#EEBE6C] to-[#CA7C4E]">
        <div className="absolute top-[40px] sm:top-[50px] left-[20px] sm:left-[40px] h-[300px] w-[300px] sm:w-[320px] bg-white rounded-md overflow-hidden shadow-lg">
          <div className="float-left w-[180px] sm:w-[200px] h-[300px] sm:h-[320px] text-center">
            <div className="relative flex justify-center items-center w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] mx-auto mt-6 sm:mt-8">
              <div className="absolute w-[66px] sm:w-[76px] h-[66px] sm:h-[76px] top-[-3px] left-[-3px] border-2 border-t-[#786450] border-b-[#786450] border-r-[#786450] border-l-transparent rounded-full transition-transform duration-1000"></div>
              <div className="absolute w-[72px] sm:w-[82px] h-[72px] sm:h-[82px] top-[-6px] left-[-6px] border-2 border-t-[#786450] border-l-[#786450] border-b-[#786450] border-r-transparent rounded-full transition-transform duration-1000"></div>
              <img
  src={UserIcon}
  alt="Jessica Potter"
  className="block w-full h-full rounded-full bg-[#F5E8DF]"
/>;
            </div>
            <div className="mt-4 sm:mt-5 text-sm font-semibold">{student.name}</div>
            <div className="mt-1 text-xs leading-tight">{student.department}</div>
            <div className="mt-6 sm:mt-8">
              <div className="mt-4 sm:mt-8" onClick={onClick}>
                <button className="block w-[100px] sm:w-[120px] h-[30px] mx-auto mb-2 text-xs font-semibold border border-[#786450] rounded-full transition-colors duration-300 hover:bg-[#786450] hover:text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
 
          <div className="float-left">
            <div className="w-[100px] sm:w-[120px] h-[90px] sm:h-[99px] bg-[#F5E8DF] text-center pt-6 sm:pt-7 transition-colors duration-300 hover:bg-[#E1CFC2]">
              <span className="block text-base sm:text-lg font-semibold">{student.totalMark}</span>
              <span className="block text-xs"> Mark</span>
            </div>
            <div className="w-[100px] sm:w-[120px] h-[90px] sm:h-[99px] bg-[#F5E8DF] text-center pt-6 sm:pt-7 transition-colors duration-300 hover:bg-[#E1CFC2] my-[1px]">
              <span className="block text-base sm:text-lg font-semibold">{student.grade}</span>
              <span className="block text-xs">Grade</span>
            </div>
            <div className="w-[100px] sm:w-[120px] h-[90px] sm:h-[99px] bg-[#F5E8DF] text-center pt-6 sm:pt-7 transition-colors duration-300 hover:bg-[#E1CFC2] my-[1px]">
              <span className="block text-base sm:text-lg font-semibold">{student.attendance}</span>
              <span className="block text-xs">Attendance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
