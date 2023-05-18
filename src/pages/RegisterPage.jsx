
import React, {useState} from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import '../pages/RegisterStyle.css'

//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

export const RegisterPage = () => {
    //*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*




const navigate = useNavigate();

        const [form ,setForm] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        email: '',
        phone: ''
        })

        const handleChange = (e)=>{
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*

        const register = async(e)=>{
            try {
                e.preventDefault()
                const { data } = await axios.post('http://localhost:3000/user/register',form)
                if(data.message){
                    Swal.fire({
                        title: 'Great!',
                        text: ' Your are Sign Up!',
                        timer: 4500,
                        icon: 'success'
                    })
                    navigate('/login')
                }
            } catch (err) {
                console.log(err)
                Swal.fire({
                    title: 'Oops!',
                    text: ' Something Went Wrong',
                    icon: 'error'
                    
                })
            }
        }

//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*
//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*

  return (
    <>
        <br></br>
        <MDBContainer fluid className='p-4'>
    
                        <MDBRow>

                        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            You are Ready for <br />
                            <span className="text-warning">Thy kind to Dive in</span>
                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Into a new Adventure!</h5>
                            </h1>
                       
                            <p className='px-3' style={{color: '#000000'}}>
                            
                            </p>

                        </MDBCol>

                        <MDBCol md='6'>

                            <MDBCard className='my-5'>
                                
                            <MDBCardBody className='p-5'>

                            <div className='d-flex flex-row mt-2 justify-center'>
                            <MDBIcon fas icon="fas fa-hotel fa-3x me-3" style={{ color: '#9C7C4B' }}/>
                            <span className="h1 fw-bold mb-0">Hotelery Lario</span>
                            </div>
                            <br></br>

                                <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='name' name='name' onChange={handleChange} type='text'/>
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Surname' name='surname' onChange={handleChange} type='text'/>
                                </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Username' name='username' onChange={handleChange}  type='text'/>
                                </MDBCol>
                                </MDBRow>
                               
                                <MDBInput wrapperClass='mb-3' label='Password' name='password' onChange={handleChange}  type='text'/>
                                <MDBInput wrapperClass='mb-3' label='Email' name='email' onChange={handleChange} type='text'/>
                                <MDBInput wrapperClass='mb-3' label='phone' name='phone' onChange={handleChange} type='text'/>
                                

                                <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Agreed to Sell my soul for This hotel' />
                                </div>

                                <MDBBtn className='w-100 mb-4' onClick={(e)=> register(e)} color='dark' size='lg'>sign up</MDBBtn>

                                <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#9C7C4B' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#9C7C4B' }}>
                                    <MDBIcon fab icon='twitter' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#9C7C4B' }}>
                                    <MDBIcon fab icon='google' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#9C7C4B' }}>
                                    <MDBIcon fab icon='github' size="sm"/>
                                </MDBBtn>

                                </div>

                            </MDBCardBody>
                            </MDBCard>

                        </MDBCol>

                        </MDBRow>

            </MDBContainer>
       
    </>
  )
}
