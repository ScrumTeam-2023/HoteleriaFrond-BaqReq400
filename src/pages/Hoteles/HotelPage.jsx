import React, { useState , useEffect } from "react";
import axios from "axios";
import { HotelTable} from '../../Components/HotelTable/HotelTable'
import Swal from 'sweetalert2'
import { Modal } from "@mui/base";
import { Typography , Box } from "@mui/material";
import '../css/SearchStyle.css'


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

export const HotelPage = ()=>{
//-------------------------------------------------------------------------------------------------------------------------------------------\\
    const [hotel,setHotel] = useState([{}])
    const [ user,setUser] = useState([])


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
    const getHotel = async()=>{
        try {
            const { data } = await axios.get('http://localhost:3000/hotel/get',/*{headers: headers}*/)
            if(data.hotel){
                setHotel(data.hotel)
                console.log(data.hotel)
            }
        } catch (err) {
            console.log(err)
            
        }
    }


    const getUsers = async()=>{
        try {
            const { data } = await axios.get('http://localhost:3000/user/get',{headers: headers})
            if(data.user){
                setUser(data.user)
                console.log(data.user)
            }
        } catch (err) {
            console.log(err)
            
        }
    }

    const addHotel = async()=>{
        try {
            let hotel = {
                name: document.getElementById('inputName').value,
                address: document.getElementById('inputAddr').value,
                description: document.getElementById('inputDescr').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value,
                user: document.getElementById('inputUser').value,
            }
            const { data } = await axios.post(`http://localhost:3000/hotel/add`, hotel/*{headers: headers}*/)
            getHotel()
            if(data.message){
                Swal.fire({
                        icon:'success',
                        title: "Lets give Em The Best",
                        text: 'Hotel Added succesfully!',
                        timer: 4000
                        
                    })
                    getHotel();
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
        addHotel();
        getHotel();
    }

    useEffect(() => {
        getHotel();
        getUsers();
      },[]);
    
    
//-------------------------------------------------------------------------------------------------------------------------------------------\\

    return(
         <div>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." />
                    <button className="search-button">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-5x me-3"/>
             | Hotel PAGE
                <div className="left binding color">
                    <br></br>
                <h3>See who are working!</h3>
                </div>
            </div>

            <button className="btn btn-warning" onClick={handleOpen}>ADD Hotel</button>

            <br></br>
            <HotelTable/>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant='h6' component="h2">
                                Add New Hotel
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <h4>Please fill all fields To Add a User</h4> 
                                <form>
                                    {/* Labels */}
                                    <div className="mb-3"> 
                                        <label htmlFor="inputName" className="form-label">Name </label> 
                                        <input type="text" className="form-control" id="inputName" required  />
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="inputAddr" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddr" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputDescr" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="inputDescr" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" required  />
                                    </div>

                                    

                                    <div className="mb-3">
                                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="inputPhone" required  />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="inputUser" className="form-label">client</label>
                                        <select className="form-control" id="inputUser">
                                         {
                                            user.map(({_id, name}, i)=>{
                                                return(
                                                        <option key={i} value={_id}>{name}</option>
                                    
                                                         )
                                                 })
                                        }
                                        </select>
                                    </div>

                                    {/* Labels */}
                                </form>
                                    <span><button className="btn btn-success"  onClick={()=> addThem()}>Add New Hotel</button></span>
                                    <span>      </span>
                                    <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>

                            </Typography>
                        </Box>
                </Modal>

        </div>
    )
}