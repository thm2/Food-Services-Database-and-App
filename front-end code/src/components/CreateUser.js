import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    let navigate = useNavigate()
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Email, setEmail] = useState("")
    const [Address, setAddress] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const validateSubmission = async() => {
        if (FirstName.trim() === "") {
            setError("First name is not valid")
        } else if (LastName.trim() === "") {
            setError("Last name is not valid")
        } else if (PhoneNumber.trim().length !== 10) {
            setError("Phone number is not valid")
        } else if (!Email.trim().includes("@") || !Email.trim().includes(".")) {
            setError("Email is not valid")
        } else if (Address.trim() === "") {
            setError("Address is not valid")
        } else if (Password.trim() === "") {
            setError("Password is not valid")
        } else if (ConfirmPassword !== Password) {
            setError("Passwords do not match")
        } else {
            setError("")
            const body = {
                FirstName: FirstName,
                LastName: LastName,
                PhoneNumber: PhoneNumber,
                Email: Email,
                Address: Address,
                Password: Password
            }
            const response = await axios.post("https://dbmsproject07.herokuapp.com/auth/signup", body)
            if (response.data === "User Added Successfully") {
                const path = "/login"
                navigate(path)
            } else if (response.data.sqlMessage === "This email address already exists. Please choose a different one.") {
                setError("This email is already in use")
            } else {
                setError("Sorry, something went wrong")
            }
        }
    }

    return (
        <div className='create-container'>
            <div className="create-form-container">
                <form className="create-register-form">
                    <h3 style={{ textAlign:"center", padding: '20px'}}>Create Account</h3>
    
                    <input
                    className="create-form-field"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}/>
    
                    <input
                    className="create-form-field"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}/>
    
                    <input
                    className="create-form-field"
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}/>
    
                    <input
                    className="create-form-field"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
    
                    <input
                    className="create-form-field"
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}/>
    
                    <input
                    className="create-form-field"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>

                    <input
                    className="create-form-field"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
    
                    <div className="btn1" onClick={validateSubmission}>Create Account</div>
                    <div style={{textAlign:'center', color:"red"}}>{error}</div>
                </form>
                </div>
        </div>
      )
}

export default CreateUser