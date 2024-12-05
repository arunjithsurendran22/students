  import React from "react";
import { motion } from "framer-motion";
import GraphRenderer from "./GraphRenderer";

interface PerformanceModalProps {
  student: any;
  onClose: () => void;
}

const PerformanceModal: React.FC<PerformanceModalProps> = ({ student, onClose }) => {
  const graphData = {
    
    datasets: [
      {
       label:student.totalMark,
        data: student.subject,
         backgroundColor: ["#82c0fa ", "#82fab7 ", "#cdfa82 ", "#faa382 "],
      },
    ],
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="relative flex justify-center items-center text-2xl text-[#0b5674] font-bold mb-4">{student.name}</h2>
        <div className="mb-6 bg-gray-50 p-4 rounded-md shadow-md">
  <p className="text-gray-700 font-medium">
    <span className="text-[#11759d] font-bold">Department:</span> {student.department}
  </p>
  <p className="text-gray-700 font-medium mt-2">
    <span className="text-[#11759d] font-bold">Attendance:</span> {student.attendance}
  </p>
  <p className="text-gray-700 font-medium mt-2">
    <span className="text-[#11759d] font-bold">Grade:</span> {student.grade}
  </p>
  <p className="text-gray-700 font-medium mt-2">
    <span className="text-[#11759d] font-bold">Total Mark:</span> {student.totalMark}
  </p>
</div>

       
        <GraphRenderer student={graphData} />
       </div>
    </motion.div>
  );
};

export default PerformanceModal;
