import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../componants/Title';

// Generate Order Data
function createData(id, name, image) {
  return { id, name, image };
}

const rows = [
  createData(
   1,
    'MERCEDES',
    '../assets/1.JPG',
  ),
  createData(2,
    'MERCEDES',
    '../assets/1.JPG',),
  createData(
    3,
    'MERCEDES',
    '../assets/1.JPG',
  ),
  createData(
    4,
    'MERCEDES',
    '../assets/1.JPG',
  ),
];


export default function Cars() {
  return (
    <React.Fragment>
      <Title>Recent Cars</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right"><img src={row.image} width="15%"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}