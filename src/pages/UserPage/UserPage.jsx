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