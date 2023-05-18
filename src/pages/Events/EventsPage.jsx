import React, { useState, useEffect } from "react";
import { EventsTable } from "../../Components/EventsTable/EventsTable";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";

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
import Swal from "sweetalert2";

export const Events = ()=>{
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const [event, setEvent] = useState([{}])
    const [hotel, setHotel] = useState([])

    const [open, setOpen] = useState(false);
    const handleOpen = ()=> setOpen(true);
    const handleClose = ()=> setOpen(false);

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

    const getEvent = async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/event/getEvents')
            setEvent(data.event)
        } catch (err) {
            console.log(err)
        }
    }
    const getHotel = async()=>{
        try {
            const { data } = await axios.get('http://localhost:3000/hotel/get',/*%7Bheaders: headers}*/)
            if(data.hotel){
                setHotel(data.hotel)
            }
        } catch (err) {
            console.log(err)

        }
    }

    const addEvent = async()=>{
        try {
            let event = {
                name: document.getElementById('inputName').value,
                typeEvent: document.getElementById('inputType').value,
                description: document.getElementById('inputDescri').value,
                price: document.getElementById('inputPrice').value,
                date: document.getElementById('inputDate').value,
                startTime: document.getElementById('inputStart').value,
                endTime: document.getElementById('inputEnd').value,
                hotel: document.getElementById('inputHotel').value
            }
            const {data} = await axios.post(`http://localhost:3000/event/createEvent`, event)
            getEvent()
            if(data.message){
                Swal.fire({
                    icon: 'success',
                    title: "Lets give Em The Best",
                    text: 'Event saved succesfully',
                    timer: 2000
                })
                getEvent();
            }
        } catch (err) {
            Swal.fire({
                title: 'Oops...',
                text: err.response.data.message,
                icon: 'error'
            })
            console.log(err)
        }
    }

    const addThem = async()=>{
        handleClose();
        addEvent();
        getEvent();
    }

    useEffect(()=>{
        getEvent();
        getHotel();
    },[]);

    return(
        <div>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-5x me-3"/>
             | EVENTS PAGE
                <div className="left binding color">
                    <br></br>
                <h3>See the Events!</h3>
                </div>
            </div>

            <button className="btn btn-warning" onClick={handleOpen}>ADD EVENTS</button>

            <br></br>
            <EventsTable/>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant='h6' component="h2">
                                Add New Event
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <h4>Please fill all fields To Add a Event</h4> 
                                <form>
                                    {/* Labels */}
                                    <div className="mb-3"> 
                                        <label htmlFor="inputName" className="form-label">Name </label> 
                                        <input type="text" className="form-control" id="inputName" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputType" className="form-label">Type Event</label>
                                        <input type="text" className="form-control" id="inputType" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputDescri" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="inputDescri" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputPrice" className="form-label">Price</label>
                                        <input type="text" className="form-control" id="inputPrice" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputDate" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="inputDate" required  />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="inputStart" className="form-label">Start Time</label>
                                        <input type="text" className="form-control" id="inputStart" required  />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputEnd" className="form-label">End Time</label>
                                        <input type="text" className="form-control" id="inputEnd" required  />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputHotel" className="form-label">Hotel</label>
                                        <select className="form-control" id="inputHotel">
                                        {
                                            hotel.map(({_id, name }, i) => {
                                                return (
                                                    <option key={i}value={_id}>
                                                         {name}
                                                    </option>
                                         );
                                        })}
                                        </select>
                                </div>
                                    {/* Labels */}
                                </form>
                                    <span><button className="btn btn-success" onClick={()=> addThem()}>Add New Event</button></span>
                                    <span>      </span>
                                    <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>

                            </Typography>
                        </Box>
                </Modal>

        </div>
    )

}