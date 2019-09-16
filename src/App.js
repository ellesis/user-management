import React, { Component } from 'react';
import Customer from './components/customer'
import './App.css';

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
      </div>
    );
  }
}

export default App;
