import React from 'react'
import { useEffect,useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
// import '../css/FormStyles.css'
export const HotelUpdate = ({_id,name,address,description,phone,email}) => {

    const [hotel, setHotel] = useState([]);
    const { id } = useParams();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

  
  const getHotelBy = async() =>{
    try {
      const { data } = await axios(`http://localhost:3000/hotel/getHotel/${id}`,{headers: headers});
      if(data){
        setHotel(data)
        console.warn(id)
          ();
      }
    } catch (err) {
      console.error(err)
    }
  }

  

  const updateHotel = async() =>{
    try {
        let updateHotel = {
          name: document.getElementById('inputName').value,
          address: document.getElementById('inputAddr').value,
          description: document.getElementById('inputDescr').value,
          email: document.getElementById('inputEmail').value,
          phone: document.getElementById('inputPhone').value, 


        }
          const { data } = await axios.put(`http://localhost:3000/hotel/update/${id}`, updateHotel,{headers: headers});
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
    getHotelBy();
  },[]);


  return (
    <>
          <div className="form-container">
          <form className='m-5 text-center'>

            <div className='mb-3'>
              <label htmlFor='inputName' className="form-label">Name</label>
              <input defaultValue={hotel.name} type='text' className='form-control' id='inputName' placeholder='Enter Name' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputAddr' className="form-label">Address</label>
              <input defaultValue={hotel.address} type='text' className='form-control' id='inputAddr' placeholder='Enter Surname' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputDescr' className="form-label">Descripcion</label>
              <input defaultValue={hotel.description} type='text' className='form-control' id='inputDescr' placeholder='Enter Username' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputEmail' className="form-label">Email</label>
              <input defaultValue={hotel.email} type='email' className='form-control' id='inputEmail' placeholder='Enter Email' required/>
            </div>

            <div className='mb-3'>
              <label htmlFor='inputPhone' className="form-label">Phone</label>
              <input defaultValue={hotel.phone} type='text' className='form-control' id='inputPhone' placeholder='Enter Phone' required/>
            </div>
            
            <Link to="/dashboard/hotel">
              <button className='btn btn-success' onClick={()=> updateHotel()}>Update</button>
            </Link>
            <Link to="/dashboard/hotel">
              <button className='btn btn-danger'>Return</button>
            </Link>

          </form>
          </div>
      
    </>
  )


}