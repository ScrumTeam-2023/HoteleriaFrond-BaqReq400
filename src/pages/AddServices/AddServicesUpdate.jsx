import React from 'react'
import { useEffect,useState } from 'react'
import { Link , Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export const AddServicesUpdate = ({_id,name,description,price}) => {
    const [service, setService] = useState([]);
    const { id } = useParams();

    const headers ={
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getService = async()=>{
        try{
            const { data } = await axios.get(`http://localhost:3000/services/getBy/${id}`,{headers: headers});
            if(data.message){
                console.warn(id)
                setService();
            }
        }catch(err){
            console.error(err)
        }
    }

    const updateService = async()=>{
        try{
            let updateService = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                price: document.getElementById('inputPrice').value,
            }

            const {data} = await axios.put(`http://localhost:3000/services/update/${id}`, updateService,{headers: headers});
            console.log(data)
            if(data.message){
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    timer: 1500
                })
                Navigate()
            }
        }catch(err){
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                timer: 1500
            })
        }
    }
    useEffect(()=>{
        getService();
    },[]);

    return(
        <>
            <form className='m-5 text-center'>
                
                <div className='mb-3'>
                    <label htmlFor='inputName' className="form-label">Name</label>
                    <input defaultValue={service.name} type='text' className='form-control' id='inputName' placeholder='Enter Name' required/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='inputDescription' className="form-label">Description</label>
                    <input defaultValue={service.description} type='text' className='form-control' id='inputDescription' placeholder='Enter Description' required/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='inputPrice' className="form-label">Price</label>
                    <input defaultValue={service.price} type='text' className='form-control' id='inputPrice' placeholder='Enter Price' required/>
                </div>

                <Link to="/dashboard/services">
                    <button className='btn btn-success' onClick={()=> updateService()}>Update</button>
                </Link>

                <Link to="/dashboard/services">
                    <button className='btn btn-danger'>Return</button>
                </Link>
            </form>
        </>
    )

}