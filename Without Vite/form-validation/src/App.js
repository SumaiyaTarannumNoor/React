import React, {useState} from 'react';

function FormValidation(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({});

  const Validate = () => {
    const newErrors = {};
    if(!formData.name) newErrors.name = 'Name is required';
    if(!formData.email) newErrors.email = 'Email is required';
    else if(!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is not valid';
    if(!formData.password) newErrors.password = 'Password is required';
    else if(formData.password.length < 6) newErrors.password = 'Password must be at least 6 letters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Validate()){
      alert('Form Submitted Successfully!')
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  return(
    <div>
      <h1>
        Form Validation
      </h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input name="name" value={formData.name} onChange={handleChange}/>
        {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
      </div><div>
        <label>Email: </label>
        <input name="email" value={formData.email} onChange={handleChange}/>
        {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
      </div><div>
        <label>Password: </label>
        <input name="password" value={formData.password} onChange={handleChange}/>
        {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
      </div>

      <button type='submit'>
        Submit
      </button>
      </form>
    </div>
  )
}

export default FormValidation;