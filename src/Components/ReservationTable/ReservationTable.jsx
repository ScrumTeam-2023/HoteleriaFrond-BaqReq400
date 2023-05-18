import React, {useState, useEffect} from "react";
import { Reservation } from "../Reservation/Reservation";
import axios from "axios";
import { Link } from "react-router-dom";
import {Modal} from "@mui/base";
import { Typography, Box } from "@mui/material";
import { ReservationUpdate } from "../../pages/Reservation/ReservationUpdate";

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}  from 'mdb-react-ui-kit';

export const ReservationTable = () =>{

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const [reserva, setReserva] = useState([{}])

    const getReserva = async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/reserva/get')
            setReserva(data.reserva)
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async(id)=>{
        try {
            const {data} = await axios.get(`http://localhost:3000/reserva/getby/${id}`)
            if(data.message){
                console.warn(id)
                setReserva();
            }
        } catch (err) {
            console.log(err)
        }
    }

    const deleteReserva = async(id) =>{
        try {
            let confirmeDelete = confirm('Are you sure to delete this Reservation ? ')
            if(confirmeDelete){
                const {data} = await axios.delete(`http://localhost:3000/reserva/deleteReserva/${id}`)
                getReserva()
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getReserva()
    },[])


    return(
        <>
            <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Start Date</th>
                <th>End Time</th>
                <th>Total</th>
                <th>Room</th>
                <th>Services</th>
                <th>Users</th>
                <th><h2>Options</h2></th>
            </tr>
            </thead>
            <tbody>
                {
                    reserva.map(({_id,startDate, endDate, total, room, roomServices, users},index)=>{

                        return(
                            
                            <tr key={index}>
                                <td>
                                    <h1><MDBIcon fas icon="user-circle fa-3x me-3" /></h1>
                                </td>   
                                <Reservation
                                    startDate={startDate}
                                   endDate={endDate}
                                   total={total}
                                   room={room}
                                   roomServices={roomServices}
                                   users={users}
                                >
                                </Reservation>
                                <div>
                                    {/*  */}
                                {/* Actualizar  /${_id}*/}
                                <Link to={`update/${_id}`}>
                                <td><button className="btn btn-light" onClick={()=> handleUpdate(_id)}>Editar </button></td>
                                </Link>
                                
                                {/*  */}
                                {/* Eliminar */}
                                <td><button className="btn btn-danger" onClick={()=> deleteReserva(_id)}>Delete</button></td>
                                <br></br>
                                </div>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}