import {useState} from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string()
    .required('Please enter a name'),
  email: yup.string()
    .required('Email is required')
    .email('Please enter a valid email address')
  password: yup.string()
    .required('Please enter a password')
    .min(8, 'Password must be at least 8 characters long'),
  termsOfService: yup.string()
    .oneOf([true], 'You must accept the terms of service'),
});

function Form(props) {

  const initialForm = {
    name: '',
    email: '',
    password: '',
    termsOfService: false,
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: updatedInfo });
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
        I agree to the terms of service: <input type='checkbox' name='termsOfService' checked={form.termsOfService} onChange={handleChange}/>
      </label>
    </form>
  );
}

export default Form;