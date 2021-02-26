import {useState, useEffect} from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string()
    .required('Please enter a name'),
  email: yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup.string()
    .required('Please enter a password')
    .min(8, 'Password must be at least 8 characters long'),
  termsOfService: yup.boolean()
    .oneOf([true], 'You must accept the terms of service'),
});

function Form({addUser}) {

  const initialForm = {
    name: '',
    email: '',
    password: '',
    termsOfService: false,
  };
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    termsOfService: '',
  });

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    // get the information about the update from the event
    const { name, type, value, checked } = e.target;
    const updatedInfo = (type === 'checkbox') ? checked : value;

    // update the form
    setForm({ ...form, [name]: updatedInfo });

    // catch validation errors in the updated entry
    yup.reach(schema, name).validate(updatedInfo).then(_ => {
      setErrors({...errors, [name]: ''});
    }).catch(err => {
      setErrors({...errors, [name]: err.errors[0]})
    });
  }

  useEffect(() => {
      // determine whether to disable submit button
      schema.isValid(form).then(valid => setDisabled(!valid));
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Name: <input type='text' name='name' value={form.name} onChange={handleChange}/>
        </label>
        <span className="error">{errors.name}</span>
      </p>
      <p>
        <label>
          Email: <input type='text' name='email' value={form.email} onChange={handleChange}/>
        </label>
        <span className="error">{errors.email}</span>
      </p>
      <p>
        <label>
          Password: <input type='password' name='password' value={form.password} onChange={handleChange}/>
        </label>
        <span className="error">{errors.password}</span>
      </p>
      <p>
        <label>
          I agree to the terms of service: <input type='checkbox' name='termsOfService' checked={form.termsOfService} onChange={handleChange}/>
        </label>
        <span className="error">{errors.termsOfService}</span>
      </p>
      <p>
        <input type='submit' value='Submit' disabled={disabled}/>
      </p>
    </form>
  );
}

export default Form;