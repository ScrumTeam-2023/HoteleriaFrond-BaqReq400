import React, { useState , useEffect } from "react";
import axios from "axios";
import { RoomTable } from "../../Components/RoomTable/RoomTable";
import Swal from 'sweetalert2'
import { Modal } from "@mui/base";
import { Typography , Box } from "@mui/material";


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
  }
  from 'mdb-react-ui-kit';

export const RoomsPage = ()=>{
//-------------------------------------------------------------------------------------------------------------------------------------------\\
    const [rooms,setRooms] = useState([{}])
    const [hotel,setHotel] = useState([])


//-------------------------------------------------------------------------------------------------------------------------------------------\\
    //Modal
//-------------------------------------------------------------------------------------------------------------------------------------------\\
    const [open, setOpen] = useState(false);

    const handleOpen = ()=> setOpen(true);
    const handleClose = ()=> setOpen(false);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

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
      };



//---------------------Agregar------------------------------------------------------------------------------------------------------\\
const getRoom = async()=>{
    try {
        const { data } = await axios.get('http://localhost:3000/rooms/get'/*{headers: headers}*/)
        if(data){
            setRooms(data.room)
            console.log(data.room)
        }
    } catch (err) {
        console.log(err)
        
    }
}

const getHotel = async()=>{
    try {
        const { data } = await axios.get('http://localhost:3000/hotel/get',{headers: headers})
        if(data.hotel){
            setHotel(data.hotel)
            console.log(data.hotel)
        }
    } catch (err) {
        console.log(err)
        
    }
}

    const addRoom = async()=>{
        try {
            let room = {
                roomNumber: document.getElementById('inputNum').value,
                description: document.getElementById('inputDescr').value,
                price: document.getElementById('inputPrice').value,
                available: document.getElementById('inputAvailable').value,
                hotel: document.getElementById('inputHotel').value,
            }
            const { data } = await axios.post(`http://localhost:3000/rooms/add`, room/*{headers: headers}*/)
            getRoom()
            if(data.message){
                Swal.fire({
                        icon:'success',
                        title: "Lets give Em The Best",
                        text: 'Room Added succesfully!',
                        timer: 4000
                        
                    })
                    getRoom();
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
//--------------------DobleFuncion---------------------------------------------------------------------------------------------------------------\\
    const addThem = async()=>{
        handleClose();
        addRoom();
        getRoom();
    }

    useEffect(() => {
        getRoom();
        getHotel();
      },[]);
    
    
//-------------------------------------------------------------------------------------------------------------------------------------------\\

    return(
        <div>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-5x me-3"/>
             | Room PAGE
                <div className="left binding color">
                    <br></br>
                <h3>Room!</h3>
                </div>
            </div>

            <button className="btn btn-warning" onClick={handleOpen}>ADD Room</button>

            <br></br>
            <RoomTable/>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant='h6' component="h2">
                                Add New Room
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <h4>Please fill all fields To Add a User</h4> 
                                <form>
                                    {/* Labels */}
                                    <div className="mb-3"> 
                                        <label htmlFor="inputNum" className="form-label">Room Number </label> 
                                        <input type="text" className="form-control" id="inputNum" required  />
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="inputDescr" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="inputDescr" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputPrice" className="form-label">Price</label>
                                        <input type="text" className="form-control" id="inputPrice" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputAvailable" className="form-label">Available</label>
                                        <input type="email" className="form-control" id="inputAvailable" required  />
                                    </div>                                    
                                    <div className="mb-3">
                                        <label htmlFor="inputHotel" className="form-label">Hotel</label>
                                        <select className="form-control" id="inputHotel">
                                         {
                                            hotel.map(({_id, name}, i)=>{
                                                return(
                                                        <option key={i} value={_id}>{name}</option>
                                    
                                                         )
                                                 })
                                        }
                                        </select>
                                    </div>

                                    {/* Labels */}
                                </form>
                                    <span><button className="btn btn-success"  onClick={()=> addThem()}>Add New Room</button></span>
                                    <span>      </span>
                                    <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>

                            </Typography>
                        </Box>
                </Modal>

        </div>
    )
}