
import { StudentTable } from "./components/StudentTable"
import { AddStudent } from "./components/AddStudent"
import { useEffect, useState } from "react";
import { type Student } from "./utils/data";
import { fetchStudents } from "./api/students";

const App = () => {

  const [students, setStudents] = useState<Student[]>([]);
  
  useEffect(() => {
    fetchStudents().then((data) => {setStudents(data); }).catch((err)=>{alert(err); });
  }, []);


  return (
    <>
      <StudentTable students={students}  />
      <AddStudent students={students} setStudents={setStudents}/>
    </>
  )
}

export default App;


 
