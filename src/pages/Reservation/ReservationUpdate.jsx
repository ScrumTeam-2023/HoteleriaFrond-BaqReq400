import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

export const ReservationUpdate = ({ _id, startDate, endDate, roomServices }) => {
    const [reserva, setReserva] = useState([])
    const [service, setService] = useState([])
    const { id } = useParams()

    const getTheReserva = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/reserva/getby/${id}`)
            if (data) {
                setReserva(data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const updateReservation = async () => {
        try {
            let updateReservation = {
                startDate: document.getElementById('inputStart').value,
                endDate: document.getElementById('inputEnd').value,
                roomServices: document.getElementById('inputServices').value,
            }
            const { data } = await axios.put(`http://localhost:3000/reserva/update/${id}`, updateReservation)
            console.log(data)
            if (data.message) {
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    timer: 1500
                })
                navigate()
            }
        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                text: 'Losiento hubo un error al actualizar',
                timer: 2000
            })
        }
    }

    const getService = async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/services/get')    
            if(data.service){
                setService(data.service)
            }        
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTheReserva();
        getService();
    }, []);

    return (
        <>
            <form className='m-5 text-center'>

                <div className='mb-3'>
                    <label htmlFor='inputStart' className="form-label">Start Date</label>
                    <input defaultValue={reserva.startDate} type='date' className='form-control' id='inputStart' placeholder='Enter Name' />
                </div>

                <div className='mb-3'>
                    <label htmlFor='inputEnd' className="form-label">End Date</label>
                    <input defaultValue={reserva.endDate} type='date' className='form-control' id='inputEnd' placeholder='Enter Type Event' />
                </div>

                <div className='mb-3'>
                    <label htmlFor="inputServices" className="form-label">Service</label>
                    <select className="form-control" id="inputServices">
                        {
                            service.map(({ _id, name }, i) => {
                                return (
                                    <option key={i} value={_id}>
                                        {name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <Link to="/dashboard/reservation">
                    <button className='btn btn-success' onClick={() => updateReservation()}>Update</button>
                </Link>
                <Link to="/dashboard/reservation">
                    <button className='btn btn-danger'>Return</button>
                </Link>

            </form>
        </>
    )
}