import React from 'react';
import Customer from './components/customer'
import './App.css';

const customer = {
  'id': 1,
  'image': 'http://placeimg.com/64/64/people',
  'name': 'Alex',
  'birthday': '991222',
  'gender': 'Meal',
  'job' : 'Student'
}

function App() {
  return (
    <Customer
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
