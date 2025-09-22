import {data} from '../utils/data';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 export function StudentTable() {
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    
                    <TableCell sx={{color:'red'}}>Full Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Class</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((student) => (
                    <TableRow>
                      
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.age}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.class}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

