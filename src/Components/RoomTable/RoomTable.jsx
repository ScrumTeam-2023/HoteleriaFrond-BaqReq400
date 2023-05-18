import { useState, useEffect } from "react";
import { Room } from "../Room/Room";
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
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


export const RoomTable = () => {
    const [room, setRoom] = useState([{}]);

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

    const getRooms = async()=>{
        try {
            const { data } = await axios.get('http://localhost:3000/rooms/get');
            setRoom(data);
        } catch (err) {
            console.error(err);
        }
    }

        

        const deleteRoom = async(id)=>{
            try{
                let confirmDelete = confirm('Are you sure to delete this room?')
                if(confirmDelete){
                    const { data } = await axios.delete(`http://localhost:3000/rooms/delete/${id}`)
                    getRooms()
                    
                }
            }catch(err){
                console.error(err)
            }
        }

        const handleUpdate = async(id)=>{
            try {
                const { data } = await axios.get(`http://localhost:3000/rooms/getOne/${id}`,{headers: headers});
                if(data.message){
                  console.warn(id)
                  setRoom();
                }
            } catch (err) {
                console.log(err)
            }

        }

        



        useEffect(()=>{getRooms();},[]);
    //--------------------------------------------//

  return (
    <>
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>roomNumber</th>
                <th>description</th>
                <th>price</th>
                <th>available</th>
                <th>hotel</th>
                <th><h2>Options</h2></th>
            </tr>
            </thead>
            <tbody>
                {
                    room.map(({_id,roomNumber,description,price,available,hotel},index)=>{

                        return(
                            
                            <tr key={index}>
                                <td>
                                    <h1><MDBIcon fas icon="user-circle fa-3x me-3" /></h1>
                                </td>   
                                <Room
                                    roomNumber={roomNumber}
                                    description={description}
                                    price={price}
                                    available={available}
                                    hotel={hotel}

                                >
                                </Room>
                                <div>
                                    {/*  */}
                                {/* Actualizar  /${_id}*/}
                                <Link to={`update/${_id}`}>
                                <td><button className="btn btn-light" onClick={()=> handleUpdate(_id)}>Editar </button></td>
                                </Link>
                                
                                {/*  */}
                                {/* Eliminar */}
                                <td><button className="btn btn-danger" onClick={()=> deleteRoom(_id)}>Delete</button></td>
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
