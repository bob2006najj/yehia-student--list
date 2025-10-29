import { Paper,TextField,Button } from "@mui/material";
import  { type ChangeEvent, type Dispatch, useEffect, useState } from "react";
import { type Student} from '../utils/data';

interface Props{
    students: Student[];
    setStudents: Dispatch<React.SetStateAction<Student[]>>;
}
export function AddStudent({students, setStudents}: Props) {
    const initialFormData = { id:0,fullname:"" ,age:"" ,email:"" ,class:"", year:""};
    const [formData, setFormData] = useState<Student>(initialFormData);
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        
    }
    const handleSubmit = () => {

       setStudents([...students, formData]);
       setFormData(initialFormData);
    }
    useEffect(() => {

     if(formData.fullname=== "Admin"){
        alert("Admin is not allowed to add students");
     }
    },[formData.fullname]);
    return (

        <Paper sx={{width:300,padding:5,marginTop:1 ,gap:1,display:"flex",flexDirection:"column"}}>
            <TextField  onChange={handleChange} value={formData.fullname} id="outlined-basic" label="Full Name " name="fullname" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.age}   id="outlined-basic" label="Age " name="age" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.email}   id="outlined-basic" label="Email " name="email" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.class}   id="outlined-basic" label="Class " name="class" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.year}   id="outlined-basic" label="Year " name="year" variant="outlined" />
           <Button  onClick={handleSubmit}  variant="contained">submit</Button>
          
        </Paper>

        

    );

};