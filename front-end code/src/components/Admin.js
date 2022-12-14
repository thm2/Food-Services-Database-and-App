import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Admin = () => {
  const [inputVendorID, setInputVendorID] = useState("")
  const [error, setError] = useState("")

  let navigate = useNavigate()
  const reroute = async() => {
    if (inputVendorID.trim() === "") {
      setError("VendorID is not valid")
    } else {
      const response = await axios.get(`https://dbmsproject07.herokuapp.com/resturants/getDetails?id=${inputVendorID}`)
      if (response.data === "The Id in not present in database") {
        setError("VendorID does not exist")
      } else {
        setError("")
        const path = "/updelete/" + inputVendorID
        navigate(path)
      }
    }
  }

  return (
    <div className='admin-container'>
        <div className="form-container">
            <form className="register-form">
                <h3 style={{ textAlign:"center", padding: '20px'}}>Administrator Actions</h3>
                <input
                className="form-field"
                value={inputVendorID}
                onChange={(e) => setInputVendorID(e.target.value)}
                placeholder="VendorID"/>
                <div style={{textAlign:'center', color:"red"}}>{error}</div>
                <div className="btn" onClick={reroute}>Find Vendor</div>
            </form>
        </div>
        <div className="form-container">
          <form className="register-form">
            <Link to="/create">
              <div className="btn">Create Vendor</div>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default Admin