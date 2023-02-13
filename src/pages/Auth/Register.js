import React, {useState} from 'react'
import Layout from './../../components/Layout/Layout';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast  from 'react-hot-toast'

const Register = () => {

  const [name,SetName] = useState("");
  const [email,SetEmail] = useState("");
  const [password,SetPassword] = useState("");
  const [phone,SetPhone] = useState("");
  const [address,SetAddress] = useState("");
  const navigate = useNavigate();

  //form function
   const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const res = await axios.post('/api/v1/auth/register', {name,email,password,phone,address});
        if( res && res.data.success){
          toast.success(res.data && res.data.message)
          navigate('/login');
        }else{
          toast.error(res.data.message)
        }
    } 
  
    catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
   }

  return (
    <Layout title="Register - Ecommerce App">
        <div className="register">
            <h1>Register</h1>
          <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" value={name}  onChange={(e) => SetName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name"  required/ >
  </div>
  <div className="mb-3">
    <input type="email" value={email}  onChange={(e) => SetEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email"  required/ >
  </div>
  <div className="mb-3">
    <input type="password" value={password}  onChange={(e) => SetPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password"  required/>
  </div>
  <div className="mb-3">
    <input type="text" value={phone}  onChange={(e) => SetPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Phone No"  required/>
  </div>
  <div className="mb-3">
    <input type="text" value={address}  onChange={(e) => SetAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Address"  required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    </Layout>
  )
}

export default Register