import { useState, useEffect } from "react";
import { User } from "../User/User";
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import { Modal } from "@mui/base";
import { Typography , Box } from "@mui/material";
import { UserUpdate } from "../../pages/UserPage/UserUpdate";

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


export const UserTable = () => {

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

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    //--------------------------------------------//
        const [user, setUser] = useState([{}])
        
        const getUsers = async()=>{
            try {
                const { data } = await axios.get('http://localhost:3000/user/get')
                setUser(data.user)
            } catch (err) {
                console.log
                
            }
        }

        

        const deleteUser = async(id)=>{
            try{
                let confirmDelete = confirm('Are you sure to delete this User?')
                if(confirmDelete){
                    const { data } = await axios.delete(`http://localhost:3000/user/delete/${id}`)
                    getUsers()
                    
                }
            }catch(err){
                console.error(err)
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

        



        useEffect(()=>{getUsers();},[]);
    //--------------------------------------------//

  return (
    <>
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Surname</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th><h2>Options</h2></th>
            </tr>
            </thead>
            <tbody>
                {
                    user.map(({_id,name,surname,username,email,phone,role},index)=>{

                        return(
                            
                            <tr key={index}>
                                <td>
                                    <h1><MDBIcon fas icon="user-circle fa-3x me-3" /></h1>
                                </td>   
                                <User
                                    name={name}
                                    surname={surname}
                                    username={username}
                                    email={email}
                                    phone={phone}
                                    role={role}
                                >
                                </User>
                                <div>
                                    {/*  */}
                                {/* Actualizar  /${_id}*/}
                                <Link to={`update/${_id}`}>
                                <td><button className="btn btn-light" onClick={()=> handleUpdate(_id)}>Editar </button></td>
                                </Link>
                                
                                {/*  */}
                                {/* Eliminar */}
                                <td><button className="btn btn-danger" onClick={()=> deleteUser(_id)}>Delete</button></td>
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
