/*import React from 'react';
import MaterialTable from 'material-table';

const Table = () => {

    const data = [
        {name: 'Nita', age: 12},
        {name: 'Shital', age: 21},
        {name: 'Snehal', age: 25},
        {name: 'Mauli', age: 15}
    ]
    const columns = [
        {
            title:'Name', field:'name'
        },
        {
            title:'Age', field:'age'
        }
    ]

    return(
        <div>
                <MaterialTable title="Employees Data" 
                    data={data}
                    columns={columns}
                    options={{
                        search:false,
                        paging:false,
                        exportButton:true
                    }}
                />
        </div>
    );
}

export default Table;*/



/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name,username, age, email, contact) {
  return { name, username, age, email, contact };
}

const rows = [
  createData('Shital Patil', 'Shitalpatil', 15,'shitalpatil@gmail.com',1234567890),
  createData('Nita Patil', 'Nitapatil', 20,'nitapatil@gmail.com', 1234567890),
  createData('Snehal Patil', 'Snehalpatil', 22,'snehalpatil@gmail.com', 1234567890),
  createData('Mauli Patil', 'Maulipatil', 25,'maulipatil@gmail.com', 612345678907),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employees List</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Age&nbsp;</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Contact&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}*/


import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Solapur', 63: 'Pune' },
      },
    ],
    data: [
      { name: 'Shital', surname: 'Patil', birthYear: 1998, birthCity: 34 },
      {
        name: 'Nita',
        surname: 'Patil',
        birthYear: 2000,
        birthCity: 63,
      },
    ],
  });

  return (
    <MaterialTable
      title="Employees List"
      columns={state.columns}
      data={state.data}
      options={{
        search: false,
        paging: false
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}