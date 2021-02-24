import {useState} from 'react';

function Form(props) {

  const initialUser = {
    name: '',
    email: '',
    password: '',
    termsOfService: false,
  };
  const [form, setForm] = useState(initialUser);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  return (
    <form>
      <label>
        Name: <input type='text' name='name' value={form.name} onChange={handleChange}/>
      </label>
      <label>
        Email: <input type='text' name='email' value={form.email} onChange={handleChange}/>
      </label>
      <label>
        Password: <input type='password' name='password' value={form.password} onChange={handleChange}/>
      </label>
      <label>
        I agree to the terms of service: <input type='checkbox' name='termsOfService' value={form.termsOfService} onChange={handleChange}/>
      </label>
    </form>
  );
}

export default Form;