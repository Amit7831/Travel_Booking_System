import React, { useState } from 'react';
import axios from "axios";


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const url = import.meta.env.VITE_BACKEND_URL;

  const handelSubmit = async () => {
    try {
      const postUrl = url + "/contact/add";
      const res = await axios.post(postUrl, {
        name,
        email,
        phone,
        message,
      });

      if (res?.data?.status) {
        alert(res?.data?.message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        
        alert("Somthing went wrong");
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='border grid gap-2 w-1/2 m-auto p-6 shadow-xl rounded-2xl'>
      <input className='normal-input' type="text" placeholder='Enter name'
        onChange={(e) => setName(e.target.value)} value={name} />
      
      <input className='normal-input' type="text" placeholder='Enter email'
        onChange={(e) => setEmail(e.target.value)} value={email} />
      
      <input className='normal-input' type="text" placeholder='Enter phone'
        onChange={(e) => setPhone(e.target.value)} value={phone} />
      
      <input className='normal-input' type="text" placeholder='Enter message'
        onChange={(e) => setMessage(e.target.value)} value={message} />
      <button className='bg-green-400 p-2 rounded '
        onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default Contact