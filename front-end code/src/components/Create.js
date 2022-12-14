import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    let navigate = useNavigate()
    let VendorId = ""
    VendorId += Math.floor(Math.random() * 9) + 1;
    for (let i = 1; i < 8; i++) {
        VendorId += Math.floor(Math.random() * 9);
    }
    
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [VendorName, setVendorName] = useState("")
    const [Type, setType] = useState("")
    const [error, setError] = useState("")

    const validateSubmission = () => {
        if (VendorName.trim() === "") {
            setError("Vendor Name is not valid")
        } else if (PhoneNumber.trim().length !== 10) {
            setError("Phone Number is not valid")
        } else if (Address.trim() === "") {
            setError("Address is not valid")
        } else if (FirstName.trim() === "") {
            setError("First Name is not valid")
        } else if (LastName.trim() === "") {
            setError("Last Name is not valid")
        } else if (Type.trim() === "") {
            setError("Vendor Type is not valid")
        } else {
            setError("")
            makeRequest()
        }
    }


    const makeRequest = async() => {
        const vendor = {
            "VendorId":VendorId.trim(),
            "PhoneNumber":PhoneNumber.trim(),
            "Address":Address.trim(),
            "FirstName":FirstName.trim(),
            "LastName":LastName.trim(),
            "VendorName":VendorName.trim(),
            "Type":Type.trim()
        }
        const response = await axios.post("https://dbmsproject07.herokuapp.com/resturants/addResturant", vendor)
        if (response.status === 200) {
            alert("Your Vendor ID is: " + VendorId)
            const path = "/admin"
            navigate(path)
        } else {
            setError("Sorry, something went wrong")
        }
    }

  return (
    <div className='create-container'>
        <div className="create-form-container">
            <form className="create-register-form">
                <h3 style={{ textAlign:"center", padding: '20px'}}>Create New Vendor</h3>

                <input
                className="create-form-field"
                type="text"
                placeholder="Vendor Name"
                onChange={(e) => setVendorName(e.target.value)}/>

                <input
                className="create-form-field"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}/>

                <input
                className="create-form-field"
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}/>

                <input
                className="create-form-field"
                type="text"
                placeholder="Owner First Name"
                onChange={(e) => setFirstName(e.target.value)}/>

                <input
                className="create-form-field"
                type="text"
                placeholder="Owner Last Name"
                onChange={(e) => setLastName(e.target.value)}/>

                <input
                className="create-form-field"
                type="text"
                placeholder="Cuisine Type"
                onChange={(e) => setType(e.target.value)}/>

                <div className="btn1" onClick={validateSubmission}>Create Vendor</div>
                <div style={{textAlign:'center', color:"red"}}>{error}</div>
            </form>
            </div>
    </div>
  )
}

export default Create