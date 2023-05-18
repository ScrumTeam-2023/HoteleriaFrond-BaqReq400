import { useState, useEffect } from "react";
import { Hotel } from "../Hotel/Hotel";
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import { Modal } from "@mui/base";
import { Typography , Box } from "@mui/material";
import { UserUpdate } from "../../pages/UserPage/UserUpdate";
import '../../pages/css/TableStyle.css'

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


export const HotelTable = () => {

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
        const [hotel, setHotel] = useState([{}])
        
        const getHotel = async()=>{
            try {
                const { data } = await axios.get('http://localhost:3000/hotel/get')
                setHotel(data.hotel)
            } catch (err) {
                console.log
                
            }
        }

        

        const deleteHotel = async(id)=>{
            try{
                let confirmDelete = confirm('Are you sure to delete this Hotel?')
                if(confirmDelete){
                    const { data } = await axios.delete(`http://localhost:3000/hotel/delete/${id}`)
                    getHotel()
                    
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

        
        


        useEffect(()=>{getHotel();},[]);
    //--------------------------------------------//

  return (
    <>
    <div className="table-container">

        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>address</th>
                <th>description</th>
                <th>email</th>
                <th>phone</th>
                <th>user</th>
                <th><h2>Options</h2></th>
            </tr>
            </thead>
            <tbody>
                {
                    hotel.map(({_id,name,address,description,email,phone,user},index)=>{

                        return(
                            
                            <tr key={index}>
                                <td>
                                    <h1><MDBIcon fas icon="user-circle fa-3x me-3" /></h1>
                                </td>   
                                <Hotel
                                    name={name}
                                    address={address}
                                    description={description}
                                    email={email}
                                    phone={phone}
                                    user={user}
                                >
                                </Hotel>
                                <div>
                                    {/*  */}
                                {/* Actualizar  /${_id}*/}
                                <Link to={`update/${_id}`}>
                                <td><button className="btn btn-light" onClick={()=> handleUpdate(_id)}>Editar </button></td>
                                </Link>
                                
                                {/*  */}
                                {/* Eliminar */}
                                <td><button className="btn btn-danger" onClick={()=> deleteHotel(_id)}>Delete</button></td>
                                <br></br>
                                </div>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    </>
  )
}
