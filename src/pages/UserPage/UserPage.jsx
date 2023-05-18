import React, { useState , useEffect } from "react";
import axios from "axios";
import { UserTable } from "../../Components/UserTable/UserTable";
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
} from 'mdb-react-ui-kit';

export const UserPage = ()=>{
//-------------------------------------------------------------------------------------------------------------------------------------------\\
    const [user,setUser] = useState([{}])
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

    const addUser = async()=>{
        try {
            let user = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSur').value,
                username: document.getElementById('inputUser').value,
                password: document.getElementById('inputPassword').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value,
                role: document.getElementById('inputRole').value
            }
            const { data } = await axios.post(`http://localhost:3000/user/save`, user)
            getUsers()
            if(data.message){
                Swal.fire({
                        icon:'success',
                        title: "Lets give Em The Best",
                        text: 'User Added succesfully!',
                        timer: 4000
                        
                    })
                    getUsers();
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
        addUser();
        getUsers();
    }

    useEffect(() => {
        getUsers();
      },[]);
    
    
//-------------------------------------------------------------------------------------------------------------------------------------------\\

    return(
        <div>
            <div className="left binding color">
            <MDBIcon fas icon="user-tie fa-5x me-3"/>
             | USER PAGE
                <div className="left binding color">
                    <br></br>
                <h3>See who are working!</h3>
                </div>
            </div>

            <button className="btn btn-warning" onClick={handleOpen}>ADD MANAGERS</button>

            <br></br>
            <UserTable/>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant='h6' component="h2">
                                Add New User
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
                                        <label htmlFor="inputSur" className="form-label">Surname</label>
                                        <input type="text" className="form-control" id="inputSur" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputUser" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="inputUser" required  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" required  />
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
                                        <label htmlFor="inputRole" className="form-label">Role</label>
                                        <input type="text" className="form-control" id="inputRole" required  />
                                    </div>
                                    {/* Labels */}
                                </form>
                                    <span><button className="btn btn-success" onClick={()=> addThem()}>Add New User</button></span>
                                    <span>      </span>
                                    <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>

                            </Typography>
                        </Box>
                </Modal>

        </div>
    )
}