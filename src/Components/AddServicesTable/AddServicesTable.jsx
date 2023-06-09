import { useState, useEffect } from "react";
import {AddServices} from "../AddServices/AddServices";
import axios from "axios";
import {Link} from "react-router-dom";
import React from "react";
import {Modal} from "@mui/base";
import {Typography, Box}from  "@mui/material";


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

  export const AddServicesTable =()=>{
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
  //---------------------------------------------------------//
  const [service, setService] = useState([{}])

  const getService = async()=>{
    try{
        const { data } = await axios.get('http://localhost:3000/services/get')
        setService(data.service)
    }catch(err){
      console.log
    }
  }

  const deleteService = async(id)=>{
    try{
        let confirmDelete = confirm('Are you sure to delete this Service?')
        if(confirmDelete){
            const { data } = await axios.delete(`http://localhost:3000/services/delete/${id}`)
            getService()
        }
    }catch(err){
        console.error(err)
    }
  }

  const handleUpdate = async(id)=>{
    try{
        const { data } = await axios.get(`http://localhost:3000/services/getBy/${id}`,{headers: headers});
        if(data.message){
            console.warn(id)
            setService();
        }
    }catch(err){

    }
  }

  useEffect(()=>{getService();},[]);
  //-------------------------------------------//

  return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th><h2>Options</h2></th>
                </tr>
            </thead>
            <tbody>
                {
                    service.map(({_id,name,description,price},index)=>{
                        return(
                            <tr key={index}>
                            <AddServices
                                
                                name={name}
                                description={description}
                                price={price}
                            >
                            </AddServices>

                            <div>
                            {/*  */}
                                {/* Actualizar  /${_id}*/}
                                <Link to={`update/${_id}`}>
                                <td><button className="btn btn-light" onClick={()=> handleUpdate(_id)}>Editar </button></td>
                                </Link>
                                
                                {/*  */}
                                {/* Eliminar */}
                                <td><button className="btn btn-danger" onClick={()=> deleteService(_id)}>Delete</button></td>
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



