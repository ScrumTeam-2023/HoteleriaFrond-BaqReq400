import React, {useState, useEffect} from "react";
import { ReservationTable } from "../../Components/ReservationTable/ReservationTable";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

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

export const ReservationPage = ()=>{

    const [reserva, setReserva] = useState([{}])
    const [room, setRoom] = useState([])
    const [service, setService] = useState([])
    const [user, setUser] = useState([])
   
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
    const getReserva = async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/reserva/get')
            setReserva(data.reserva)
        } catch (err) {
            console.log(err)
        }
    }
    const getUsers = async()=>{
        try {
            const { data } = await axios.get('http://localhost:3000/user/get')
            if(data.user){
                setUser(data.user)
            }
        } catch (err) {
            console.log(err)
            
        }
    }
    const getRoom = async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/rooms/get')
            if(data){
                setRoom(data)
            }        
        } catch (err) {
            console.log(err)
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

    const addReservation = async() =>{
        try {
            let reserva = {
                startDate: document.getElementById('inputStart').value,
                endDate: document.getElementById('inputEnd').value,
                total: document.getElementById('inputTotal').value,
                room: document.getElementById('inputRoom').value,
                roomServices: document.getElementById('inputService').value,
                users: document.getElementById('inputUser').value
            }
            const {data} = await axios.post(`http://localhost:3000/reserva/addReserva`, reserva)
            getReserva()
            if(data.message){
                Swal.fire({
                    icon: 'success',
                    title: "Lets give Em The Best",
                    text: 'Reservation saved succesfully',
                    timer: 2000
                })
                getReserva()
            }
        } catch (err) {
            Swal.fire({
                title: 'Oops...',
                text:'Verifique que la fecha de salida sea la adecuada !!',
                //text: err.response.data.message,
                icon: 'error'
            })
            console.log(err)
        }
    }
    const addThem = async() =>{
        handleClose();
        addReservation();
        getReserva();
    }

    useEffect(()=>{
        getReserva();
        getUsers();
        getRoom();
        getService();
    },[])

    return(
        <div>
        <div className="left binding color">
        <MDBIcon fas icon="user-tie fa-5x me-3"/>
         | RESERVATION PAGE
            <div className="left binding color">
                <br></br>
            <h3>See the reservation!</h3>
            </div>
        </div>

        <button className="btn btn-warning" onClick={handleOpen}>ADD RESERVATION</button>

        <br></br>
        <ReservationTable/>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant='h6' component="h2">
                            Add New Reservation
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h4>Please fill all fields To Add a Reservation</h4> 
                            <form>
                                {/* Labels*/ }

                                <div className="mb-3">
                                    <label htmlFor="inputStart" className="form-label">Start Date</label>
                                    <input type="date" className="form-control" id="inputStart"   />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputEnd" className="form-label">End Date</label>
                                    <input type="date" className="form-control" id="inputEnd"   />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputTotal" className="form-label">Total</label>
                                    <input type="number" className="form-control" id="inputTotal"   />
                                </div>
                                
                                <div >
                                    <label htmlFor="inputRoom" className="form-label">Room</label>
                                    <select className="form-control" id="inputRoom">
                                    {  
                                        room.map(({_id, roomNumber}, i) => {
                                            return (
                                                <option key={i} value={_id}>
                                                     {roomNumber}
                                                </option>
                                            )
                                        })
                                    }
                                    </select>
                                </div>

                                <div >
                                    <label htmlFor="inputService" className="form-label">Service</label>
                                    <select className="form-control" id="inputService">
                                    {  
                                        service.map(({_id, name}, i) => {
                                            return (
                                                <option key={i} value={_id}>
                                                     {name}
                                                </option>
                                            )
                                        })
                                    }
                                    </select>
                                </div>

                            <div className="mb-3">
                                    <label htmlFor="inputUser" className="form-label">User</label>
                                    <select className="form-control" id="inputUser">
                                    {
                                        user.map(({_id, name }, i) => {
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
                                <span><button className="btn btn-success" onClick={()=> addThem()}>Add New Reservation</button></span>
                                <span>      </span>
                                <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>

                        </Typography>
                    </Box>
            </Modal>

    </div>
)
}












































