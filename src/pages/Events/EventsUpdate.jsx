import axios from "axios";
import Swal from "sweetalert2";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

export const EventUpdate = ({_id, name, typeEvent, description, price, date, startTime, endTime})=>{
    const [events, setEvent] = useState([])
    const {id} = useParams()

    const getTheEvent = async()=>{
        try {
            const {data} = await axios.get(`http://localhost:3000/event/get/${id}`)        
            if(data.message){
                console.warn(id)
                setEvent()
            }    
        } catch (err) {
            console.log(err)
        }
    }

    const updateEvent = async() => {
        try {
            let updateEvent = {
                name: document.getElementById('inputName').value,
                typeEvent: document.getElementById('inputType').value,
                description: document.getElementById('inputDescri').value,
                price: document.getElementById('inputPrice').value,
                date: document.getElementById('inputDate').value,
                startTime: document.getElementById('inputStart').value,
                endTime: document.getElementById('inputEnd').value            }
            const {data} = await axios.put(`http://localhost:3000/event/updateEvent/${id}`, updateEvent)
            console.log(data)
            if(data.message){
                Swal.fire({
                    icon:'success',
                    title: data.message,
                    timer: 1500
                })
                navigate()
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
        getTheEvent();
    }, []);

    return(
        <>
            <form className='m-5 text-center'>

            <div className='mb-3'>
                <label htmlFor='inputName' className="form-label">Name</label>
                <input defaultValue={events?.name} type='text' className='form-control' id='inputName' placeholder='Enter Name' />
            </div>

            <div className='mb-3'>
                <label htmlFor='inputType' className="form-label">Type Event</label>
                <input defaultValue={events?.typeEvent} type='text' className='form-control' id='inputType' placeholder='Enter Type Event' />
            </div>

            <div className='mb-3'>
                <label htmlFor='inputDescri' className="form-label">Description</label>
                <input defaultValue={events?.description} type='text' className='form-control' id='inputDescri' placeholder='Enter Description' />
            </div>

            <div className='mb-3'>
                <label htmlFor='inputPrice' className="form-label">Price</label>
                <input defaultValue={events?.price} type='text' className='form-control' id='inputPrice' placeholder='Enter Price' />
            </div>

            <div className='mb-3'>
                <label htmlFor='inputDate' className="form-label">Date</label>
                <input defaultValue={events?.date} type='date' className='form-control' id='inputDate' placeholder='Enter Date' />
            </div>

            <div className='mb-3'>
                <label htmlFor='inputStart' className="form-label">Start Time</label>
                <input defaultValue={events?.startTime} type='text' className='form-control' id='inputStart' placeholder='Enter Start Time' />
            </div>

            <div className='mb-3'>
                <label htmlFor='inputEnd' className="form-label">End Time</label>
                <input defaultValue={events?.endTime} type='text' className='form-control' id='inputEnd' placeholder='Enter End Time' />
            </div>

            <Link to="/dashboard/events">
                <button className='btn btn-success' onClick={()=> updateEvent()}>Update</button>
            </Link>
            <Link to="/dashboard/events">
                <button className='btn btn-danger'>Return</button>
            </Link>

            </form>
        </>
    )
}