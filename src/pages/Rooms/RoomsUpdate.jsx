import React from 'react'
import { useEffect,useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export const RoomUpdate = ({_id,description,price}) => {
    const [room, setRoom] = useState([]);
    const { id } = useParams();
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  
    
    const getTheRoom = async()=>{
        try {
            const { data } = await axios.get(`http://localhost:3000/rooms/getOne/${id}`/*{headers: headers}*/)
            if(data){
                setRoom(data)
                console.log(data.room)
            }
        } catch (err) {
            console.log(err)
            
        }
    }
  
    
  
    const updateRoom = async() =>{
      try {
          let updateRoom = {
            description: document.getElementById('inputDescri').value,
            price: document.getElementById('inputPrice').value,
          }
            const { data } = await axios.put(`http://localhost:3000/rooms/update/${id}`, updateRoom,{headers: headers});
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
      getTheRoom();
    },[]);
  
  
    return (
      <>
       
            <form className='m-5 text-center'>
  
              <div className='mb-3'>
                <label htmlFor='inputDescri' className="form-label">Description</label>
                <input defaultValue={room.description} type='text' className='form-control' id='inputDescri' placeholder='Enter Name' required/>
              </div>
  
              <div className='mb-3'>
                <label htmlFor='inputPrice' className="form-label">Price</label>
                <input defaultValue={room.price} type='text' className='form-control' id='inputPrice' placeholder='Enter Surname' required/>
              </div>              
              <Link to="/dashboard/rooms">
                <button className='btn btn-success' onClick={()=> updateRoom()}>Update</button>
              </Link>
              <Link to="/dashboard/rooms">
                <button className='btn btn-danger'>Return</button>
              </Link>
  
            </form>
        
      </>
    )
   
}
