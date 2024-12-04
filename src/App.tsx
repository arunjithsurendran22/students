import React, { useState } from "react";
import StudentCard from "./components/StudentCard";
import PerformanceModal from "./components/PerfomanceModal"

const studentData = [
 { id: 1, name: "John Doe", department:"Computer Science" , age: 20, attendance: "95%",  totalMark:"90%" ,grade: "A" , subject:{maths:75,english:80,computerScience:96 , DataStracture:62}},
  { id: 2, name: "Jane Smith",department:"Computer Science", age: 25, attendance: "90%", totalMark:"90%" , grade: "B+" , subject:{maths:70,english:87,computerScience:90 , DataStracture:78}},
   { id: 3, name: "Samuel Lee", department:"Computer Science",age: 21, attendance: "85%",  totalMark :"90%" ,grade: "A+" , subject:{maths:80,english:98,computerScience:80 , DataStracture:88} },
];

const App: React.FC = () => {
   const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (student: any) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
       <h1 className="text-3xl font-bold text-center mb-8">Student Performance</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {studentData.map((student) => (
          <StudentCard
            key={student.id}
             student={student}
            onClick={() => openModal(student)}
          />
        ))}
      </div>

      {isModalOpen && (
        <PerformanceModal student={selectedStudent} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
