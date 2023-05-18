import React, { useState , useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import Swal from 'sweetalert2'
import axios from 'axios'
 //*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*

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

 //*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*

export const LoginPage = () => {
    //*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*
    const {loggedIn , setLoggedIn , setDataUser} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        username: '',
        password: ''
      })

      const handleChange = (e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*

//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*
    const logIn = async(e)=>{
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3000/user/login',form)
            console.log(data.user)
            if(data.message){
                Swal.fire({
                    icon: 'success',
                    title: 'Logged In!',
                    text: 'Welcome'
                })
                localStorage.setItem('token',data.token)
                setDataUser(data.userLogged)
                setLoggedIn(true)
                navigate('/dashboard')

            }
        }catch (err) {
           console.log(err)
           Swal.fire({
            title: 'Error',
            text: 'There might be some Credentials that are Invalid',
            icon: 'error',
            timer: 3500
           }) 
        }
    }

//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*
                                                                            //HTML
 //*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*
  return (
        <>
          <MDBContainer className="my-5">
                    <br></br>
                <MDBCard>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                    <br></br>
                    <br></br>   
                    <br></br>
                    <MDBCardImage src='https://www.passporttheworld.com/wp-content/uploads/2021/02/guatemala24-e1613316378201.jpg' alt="login form" className='rounded-start w-100 h-90'/>
                    </MDBCol>

                    <MDBCol md='6'>
                       
                    <MDBCardBody className='d-flex flex-column'>

                        <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="fas fa-hotel fa-3x me-3" style={{ color: '#9C7C4B' }}/>
                        <span className="h1 fw-bold mb-0">Hotelery Lario</span>
                        </div>

                        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Log in Into your new Travel!</h5>



                        <MDBInput onChange={handleChange} wrapperClass='mb-4' name='username' className='form-control' label='username' type="text" size="lg"/>
                        <MDBInput onChange={handleChange} wrapperClass='mb-4' name='password' className='form-control' label='password'  type='password' size="lg"/>




                        <MDBBtn onClick={(e)=> logIn(e)}  className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>

                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <Link to='/register'>
                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here for FREE!</a></p>
                        </Link>
                        
                        <Link to='/register'>
                        <div className='d-flex flex-row justify-content-start'>
                        <a href="#!" className="small text-muted me-1">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                        </div>
                        </Link>

                    </MDBCardBody>
                    </MDBCol>

                </MDBRow>
                </MDBCard>

        </MDBContainer>
        </>
  )
}
