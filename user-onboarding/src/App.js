import logo from './logo.svg';
import './App.css';

import Axios from 'axios';

import Form from './Form.js';

function App() {
  
  const addUser = (form) => {
    Axios.post('https://reqres.in/api/users', form).then (res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <Form addUser={addUser}/>
    </div>
  );
}

export default App;
