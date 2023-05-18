import React, { useState, useEffect } from "react";
import { Event } from "../Events/Event";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";
import { EventUpdate } from "../../pages/Events/EventsUpdate";

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

export const EventsTable = ()=>{
    
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

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const [event, setEvent] = useState([{}])

    const getEvent = async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/event/getEvents')
            setEvent(data.event)
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async(id)=>{
        try {
            const { data } = await axios.get(`http://localhost:3000/user/getOne/${id}`,{headers: headers});
            if(data.message){
              console.warn(id)
              setUser();
            }
        } catch (err) {
            
        }

    }

    const deleteEvent = async(id)=>{
        try {
            let confirmDelete = confirm('Are you sure to delete this Event ?')
            if(confirmDelete){
                const {data} = await axios.delete(`http://localhost:3000/event/deleteEvent/${id}`)
                getEvent()
            }            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getEvent()
    },[]);

    return (
        <>
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>TypeEvent</th>
                <th>Description</th>
                <th>Price</th>
                <th>Date</th>
                <th>StartTime</th>
                <th>EndTime</th>
                <th>Hotel</th>
                <th><h2>Options</h2></th>
            </tr>
            </thead>
            <tbody>
                {
                    event.map(({_id,name,typeEvent,description,price,date,startTime,endTime,hotel},index)=>{

                        return(
                            
                            <tr key={index}>
                                <td>
                                    <h1><MDBIcon fas icon="user-circle fa-3x me-3" /></h1>
                                </td>   
                                <Event
                                    name={name}
                                   typeEvent={typeEvent}
                                   description={description}
                                   price={price}
                                   date={date}
                                   startTime={startTime}
                                   endTime={endTime}
                                   hotel={hotel}
                                >
                                </Event>
                                <div>
                                    {/*  */}
                                {/* Actualizar  /${_id}*/}
                                <Link to={`update/${_id}`}>
                                <td><button className="btn btn-light" onClick={()=> handleUpdate(_id)}>Editar </button></td>
                                </Link>
                                
                                {/*  */}
                                {/* Eliminar */}
                                <td><button className="btn btn-danger" onClick={()=> deleteEvent(_id)}>Delete</button></td>
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