import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../componants/Title';

// Generate Order Data
function createData(id,  name, location, amount) {
  return { id,  name, location, amount };
}

const rows = [
  createData(
    1,
    'Smith',
    'Paul McCartney',
    866.99,
  ),
  createData(2, 'John', 'Tom Scholz', 100.81),
  createData(
    3,
    'Tom',
    'Michael Jackson',
    654.39,
  ),
  createData(
    4,
    'William',
    'Bruce Springsteen',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Customers() {
  return (
    <React.Fragment>
      <Title>Top Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Locatoion</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}