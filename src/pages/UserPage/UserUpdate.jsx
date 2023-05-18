import React from 'react'
import { useEffect,useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export const UserUpdate = ({_id,name,surname,username,email,phone,role}) => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  
  const getTheUser = async() =>{
    try {
      const { data } = await axios.get(`http://localhost:3000/user/getOne/${id}`,{headers: headers});
      if(data.message){
        console.warn(id)
        setUser();
      }
    } catch (err) {
      console.error(err)
    }
  }

  

  const updateUser = async() =>{
    try {
        let updateUser = {
          name: document.getElementById('inputName').value,
          surname: document.getElementById('inputSur').value,
          username: document.getElementById('inputUser').value,
          email: document.getElementById('inputEmail').value,
          phone: document.getElementById('inputPhone').value,


        }
          const { data } = await axios.put(`http://localhost:3000/user/update/${id}`, updateUser,{headers: headers});
          console.log(data)
          if(data.message){
            Swal.fire({
              icon:'success',
              title: data.message,
              timer: 1500
              

            })
            navigate()
          }
        } catch(err) {
          console.log(err)
          Swal.fire({
              icon: 'error',
              title: err.response.data.message,
              timer: 1500
            })
        }


        

  }
  useEffect(() => {
    getTheUser();
  },[]);


  return (
    <>
     
          <form className='m-5 text-center'>

            <div className='mb-3'>
              <label htmlFor='inputName' className="form-label">Name</label>
              <input defaultValue={user.name} type='text' className='form-control' id='inputName' placeholder='Enter Name' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputSur' className="form-label">Surname</label>
              <input defaultValue={user.surname} type='text' className='form-control' id='inputSur' placeholder='Enter Surname' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputUser' className="form-label">Username</label>
              <input defaultValue={user.username} type='text' className='form-control' id='inputUser' placeholder='Enter Username' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputEmail' className="form-label">Email</label>
              <input defaultValue={user.email} type='email' className='form-control' id='inputEmail' placeholder='Enter Email' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputPhone' className="form-label">Phone</label>
              <input defaultValue={user.phone} type='text' className='form-control' id='inputPhone' placeholder='Enter Phone' required/>
            </div>
            
            <Link to="/dashboard/user">
              <button className='btn btn-success' onClick={()=> updateUser()}>Update</button>
            </Link>
            <Link to="/dashboard/user">
              <button className='btn btn-danger'>Return</button>
            </Link>

          </form>
      
    </>
  )
}
