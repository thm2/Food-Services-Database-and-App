import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ getUserID }) => {
    let navigate = useNavigate()
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [error, setError] = useState("")

    const authenticate = async() => {
        if (!inputEmail.trim().includes("@") || !inputEmail.trim().includes(".")) {
            setError("Email is not valid")
        } else if (inputPassword === "") {
            setError("Password is not valid")
        } else {
            setError("")
            const body = {"email": inputEmail, "password": inputPassword}
            const response = await axios.put("https://dbmsproject07.herokuapp.com/auth/login", body)
            if (response.data === "No email found") {
                setError("Email does not exist")
            } else if (response.data === "wrong password") {
                setError("Password is incorrect")
            } else {
                setError("")
                getUserID(response.data)
                const path = "/"
                navigate(path)
            }
        }
    }

    return (
        <div className='login-container'>
            <div className="form-container">
                <form className="register-form">
                    <h3 style={{ textAlign:"center", padding: '20px'}}>Sign in</h3>
                    <input
                    className="form-field"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder="Email"/>
                    <input
                    type="password"
                    className="form-field"
                    onChange={(e) => setInputPassword(e.target.value)}
                    placeholder="Password"/>
                    <div style={{textAlign:'center', color:"red"}}>{error}</div>
                    <div className="btn" onClick={authenticate}>Sign in</div>
                </form>
            </div>
            <div className="form-container">
              <form className="register-form">
                <Link to="/createUser">
                  <div className="btn">Create Account</div>
                </Link>
              </form>
            </div>
        </div>
      )
}

export default Login