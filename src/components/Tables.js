import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const boldCellStyle = {
  fontWeight: 'bold',
  fontSize: '16px', // Adjust the font size as per your preference
};

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DataTable = () => {
  return (
    <TableContainer component={Paper} style={{ padding: 16 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ ...boldCellStyle, fontSize: '20px' }}>Dessert (100g serving)</TableCell>
            <TableCell align="right" style={boldCellStyle}>Calories</TableCell>
            <TableCell align="right" style={boldCellStyle}>Fat&nbsp;(g)</TableCell>
            <TableCell align="right" style={boldCellStyle}>Carbs&nbsp;(g)</TableCell>
            <TableCell align="right" style={boldCellStyle}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
