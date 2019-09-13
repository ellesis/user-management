import React from 'react';
import Customer from './components/customer'
import './App.css';

const customer = {
  'name': 'Alex',
  'birthday': '991222',
  'gender': 'Meal',
  'job' : 'Student'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
