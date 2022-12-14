import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Updelete = () => {
  let navigate = useNavigate()
  const VendorId = window.location.pathname.substring(10, window.location.pathname.length)
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Address, setAddress] = useState("")
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [VendorName, setVendorName] = useState("")
  const [Type, setType] = useState("")

  const [dbPhoneNumber, setDbPhoneNumber] = useState("")
  const [dbAddress, setDbAddress] = useState("")
  const [dbFirstName, setDbFirstName] = useState("")
  const [dbLastName, setDbLastName] = useState("")
  const [dbVendorName, setDbVendorName] = useState("")
  const [dbType, setDbType] = useState("")

  const [error, setError] = useState("")
  const [avgPrice, setAvgPrice] = useState("N/A")
  const [classification, setClassification] = useState("N/A")
  const [deletePrompt, setDeletePrompt] = useState("")

  useEffect(() => {
    getData();
  },[])

  const getData = async() => {
    const body = {"id":VendorId}
    const response1 = await axios.put("https://dbmsproject07.herokuapp.com/resturants/getAvgPrice", body)
    setAvgPrice(response1.data.avg_price)
    setClassification(response1.data.status)
    const response = await axios.get(`https://dbmsproject07.herokuapp.com/resturants/getDetails?id=${VendorId}`)
    setPhoneNumber(response.data.PhoneNumber)
    setDbPhoneNumber(response.data.PhoneNumber)
    setAddress(response.data.Address)
    setDbAddress(response.data.Address)
    setFirstName(response.data.FirstName)
    setDbFirstName(response.data.FirstName)
    setLastName(response.data.LastName)
    setDbLastName(response.data.LastName)
    setVendorName(response.data.VendorName)
    setDbVendorName(response.data.VendorName)
    setType(response.data.Type)
    setDbType(response.data.Type)
  }

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
    let overallStatus = true
    if (PhoneNumber !== dbPhoneNumber) {
      const obj = {"attribute":"PhoneNumber", "value":PhoneNumber, "id":VendorId}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/updateResturant", obj)
      overallStatus = overallStatus && (response.status === 200)
    }
    if (Address !== dbAddress) {
      const obj = {"attribute":"Address", "value":Address, "id":VendorId}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/updateResturant", obj)
      overallStatus = overallStatus && (response.status === 200)
    }
    if (FirstName !== dbFirstName) {
      const obj = {"attribute":"FirstName", "value":FirstName, "id":VendorId}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/updateResturant", obj)
      overallStatus = overallStatus && (response.status === 200)
    }
    if (LastName !== dbLastName) {
      const obj = {"attribute":"LastName", "value":LastName, "id":VendorId}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/updateResturant", obj)
      overallStatus = overallStatus && (response.status === 200)
    }
    if (VendorName !== dbVendorName) {
      const obj = {"attribute":"VendorName", "value":VendorName, "id":VendorId}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/updateResturant", obj)
      overallStatus = overallStatus && (response.status === 200)
    }
    if (Type !== dbType) {
      const obj = {"attribute":"Type", "value":Type, "id":VendorId}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/updateResturant", obj)
      overallStatus = overallStatus && (response.status === 200)
    }
    if (overallStatus) {
      const path = "/admin"
      navigate(path)
    } else {
      setError("Sorry, something went wrong")
    }
  }

  const deleteVendor = async() => {
    if (deletePrompt === "") {
      setDeletePrompt("Click again to confirm delete")
    } else {
      setDeletePrompt("")
      const body = {"id":parseInt(VendorId)}
      const response = await axios.put("https://dbmsproject07.herokuapp.com/resturants/deleteResturant", body)
      if (response.status === 200) {
        setError("")
        const path = "/admin"
        navigate(path)
      } else {
        setError("Sorry, something went wrong")
      }
    }
  }

  return (
    <div className='updelete-container'>
        <div className="updelete-form-container">
            <form className="updelete-register-form">
            <div style={{textAlign:'center', color:"green", paddingBottom:"15px"}}>The average price of your restaurant is ${avgPrice} ({classification})</div>
                <h3 style={{ textAlign:"center", padding: '20px'}}>Update Vendor</h3>
                
                
                <input
                className="updelete-form-field"
                type="text"
                placeholder="Vendor Name"
                value={VendorName}
                onChange={(e) => setVendorName(e.target.value)}/>
                
                <input
                className="updelete-form-field"
                type="text"
                placeholder="Phone Number"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}/>
                
                <input
                className="updelete-form-field"
                type="text"
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}/>
                
                <input
                className="updelete-form-field"
                type="text"
                placeholder="First Name"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}/>
                
                <input
                className="updelete-form-field"
                type="text"
                placeholder="Last Name"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}/>
                
                <input
                className="updelete-form-field"
                type="text"
                placeholder="Vendor Type"
                value={Type}
                onChange={(e) => setType(e.target.value)}/>
                
                <div className="btn1" onClick={validateSubmission}>Update Vendor</div>
                <div style={{textAlign:'center', color:"red"}}>{error}</div>
            </form>
            </div>
            <div className="updelete-form-container">
            <form className="updelete-register-form">
                <div className="btn1" style={{ backgroundColor:'red'}} onClick={deleteVendor}>Delete Vendor</div>
                <div style={{textAlign:'center', color:"red"}}>{deletePrompt}</div>
            </form>
        </div>
    </div>
  )
}

export default Updelete