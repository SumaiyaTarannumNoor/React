import { useState } from "react";

function App(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
});

const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if(!formData.name) newErrors.name = "Name is required";
  if(!formData.email) newWrrors.email = "Email Required";
  else if(!/^\S+@\S.\S+$/.test(formData.email)) newErrors.email = "Email is invalid";
  if(!formData.password) newErrors.password = "Password Required";
  else if(formData.password.length < 6) newErrors.password = "Password must be at least 6 letters."
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit=(e)=>{
  e.preventDefault();
  if(validate()){
    alert("Form Submitted Successfully!");
  }
};

const handleChange=(e)=>{
  setFormData({...formData, [e.target.name]: e.target.value})
};

return(
  <div>
    <h1>Form Validation</h1>
    <form onSubmit={handleSubmit}>
     <div>
      <label>Name: </label>
      <input name="name" value={formData.name} onChange={handleChange}/>
      {errors.name && <span>{errors.name}</span>}
     </div>
     <div>
      <label>Email: </label>
      <input name="email" value={formData.email} onChange={handleChange}/>
      {errors.email && <span>{errors.email}</span>}
     </div><div>
      <label>Password: </label>
      <input name="password" value={formData.password} onChange={handleChange}/>
      {errors.password && <span>{errors.password}</span>}
     </div>
     <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default App;