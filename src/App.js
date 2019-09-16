import React, { Component } from 'react';
import Customer from './components/customer'
import './App.css';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': 'Alex',
    'birthday': '991222',
    'gender': 'Male',
    'job' : 'Student'
  },{
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': 'Julia',
    'birthday': '051222',
    'gender': 'Female',
    'job' : 'Student'
  },{
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': 'Lisa',
    'birthday': '791222',
    'gender': 'Female',
    'job' : 'Student'
  }
]

class App  extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(item=>{
                return (
                  <Customer
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    birthday={item.birthday}
                    gender={item.gender}
                    job={item.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
