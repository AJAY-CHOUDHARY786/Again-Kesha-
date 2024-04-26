// components/LoginForm.js
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from '@/components/Header';


const AdminLogin = () => {
  const router=useRouter()
  const [email, setEmail] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  // useEffect(() => {
  //   const data=localStorage.getItem("lib-cache");
  //   const auth = typeof data === 'string' ? JSON.parse(data) : data;   
  //   if(auth?.token && auth?.user?.fname){        
  //     router.back();
  //   }
    
  // }, [])
  const validate = () => {
    setEmailBlurred(true);
    setPasswordBlurred(true);
    return validEmail(email) && validPassword(password);
  };

  const validEmail = (email) => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    return re.test(email.toLowerCase());
  };

  const validPassword = (password) => {
    return password.length > 7;
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
        try {
            const {data}= await axios.post('/api/login',{email,password});
            if(data?.success){                
                localStorage.setItem("lib-cache",JSON.stringify(data))
                router.push('/admin/dashboard');
            }else{
              toast.error(data?.message);
            }
        } catch (error) {
            console.log(error)
        }
    }
  };

  return (
    <>
    <Header/>
    <div className="container mb-4 top-margin">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
        <h1 className='text-center'>Login As a Admin</h1>
          <div className="form-border px-5 py-5" id="form1">           
            <form onSubmit={handleSubmit}>
                <div className="form-data">
                  <div className="forms-inputs mb-4">
                    <span>Email </span>
                    <input
                      autoComplete="off"
                      type="text"
                      value={email}
                      className={`form-control ${!validEmail(email) && emailBlurred ? 'is-invalid' : ''}`}
                      onBlur={() => setEmailBlurred(true)}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">A valid email is required!</div>
                  </div>
                  <div className="forms-inputs mb-4">
                    <span>Password</span>
                    <input
                      autoComplete="off"
                      type="password"
                      value={password}
                      className={`form-control ${!validPassword(password) && passwordBlurred ? 'is-invalid' : ''}`}
                      onBlur={() => setPasswordBlurred(true)}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">Password must be 8 characters!</div>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-dark w-100">
                      Login
                    </button>
                  </div>  
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default AdminLogin;
