import logo from './logo.svg';
import './App.css';

import Axios from 'axios';
import {useState} from 'react';

import Form from './Form.js';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (form) => {
    Axios.post('https://reqres.in/api/users', form).then (res => {
      setUsers([...users, res.data]);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <>
      <div className="App">
        <Form addUser={addUser}/>
      </div>
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </>
  );
}

export default App;
