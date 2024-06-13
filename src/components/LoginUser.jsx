import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {

    const [data, changeData] = useState([

        {
           
            "email": "",
            "password": ""

        }

    ])



    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    
    const readValue = () => {
        axios.post("http://localhost:8080/login",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {                 
                    alert("login success")
                    
                } else {
                    alert("failed to login")
                    
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <Navbar/>

            <h1 align="center"><u>Login</u></h1>
            <div className="container">
                <div className="card" >

                    <div class="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label><br></br>
                                        <input type="text" className="form-control" name='email' value={data.userName} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={data.passward} onChange={inputHandler} />
                                    </div>
                                  

                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>Login</button><br></br><br></br>

                                        <p>new users click to register <Link to="/reg">sign up</Link></p>
                                                                    
                                          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login