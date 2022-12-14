import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = ({ userID }) => {
  const colNames = ["Restaurant", "Phone Number", "Address", "Type", "Rating"]
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingQuery, setIsLoadingQuery] = useState("")
  const [query, setQuery] = useState("")
  const [hook, setHook] = useState("Hungry? We Know.")

  useEffect(() => {
    getData()
  },[])

  useEffect(() => {
    if (userID === "") {
      setHook("Hungry? We Know.")
    }
  }, [userID])

  const getData = async() => {
    setIsLoading(true)
    const response = await axios.get("https://dbmsproject07.herokuapp.com/resturants/getResturants")
    response.data.forEach(item => {
      var parsed = "(" + item.phoneNumber.substring(0,3) + ") " + item.phoneNumber.substring(3,6) + "-" + item.phoneNumber.substring(6,10)
      item.phoneNumber = parsed
    })
    setData(response.data)
    setIsLoadingQuery(`Top ${response.data.length} restaurants loaded`)
    if (userID !== "") {
      const body = {"id": userID}
      const response1 = await axios.put("https://dbmsproject07.herokuapp.com/users/getFirstName", body)
      let name = response1.data[0] + response1.data.substring(1, response1.data.length).toLowerCase()
      setHook(`Hey ${name}, feeling hungry?`)
    }
    setIsLoading(false)
  }

  const mapsParser = value => {
    let valueParsed = ""
    for (let i = 0 ; i < value.length; i++) {
      if (value[i] === " ") {
        valueParsed += "+"
      } else {
        valueParsed += value[i]
      }
    }
    return "https://www.google.com/maps/search/" + valueParsed
  }

  const searchPressed = async() => {
    if (query.trim() === "") {
      setIsLoadingQuery("Loading results...")
      const response = await axios.get("https://dbmsproject07.herokuapp.com/resturants/getResturants")
      response.data.forEach(item => {
        var parsed = "(" + item.phoneNumber.substring(0,3) + ") " + item.phoneNumber.substring(3,6) + "-" + item.phoneNumber.substring(6,10)
        item.phoneNumber = parsed
      })
      setData(response.data)
      setIsLoadingQuery(`Top ${response.data.length} restaurants loaded`)
    } else {
      setIsLoadingQuery("Loading results...")
      const response = await axios.get(`https://dbmsproject07.herokuapp.com/resturants/getVendorDetails?vendor=${query}`)
      if (response.data === "No vendor found") {
        setData([])
        setIsLoadingQuery(`0 results found`)
      } else {
        response.data.forEach(item => {
          var parsed = "(" + item.phoneNumber.substring(0,3) + ") " + item.phoneNumber.substring(3,6) + "-" + item.phoneNumber.substring(6,10)
          item.phoneNumber = parsed
        })
        setData(response.data)
        setIsLoadingQuery(`${response.data.length} results found`)
      }
    }
  }

  return isLoading ? <><div className='background-image'/><h1 className='loader'>Loading...</h1></> : (
    <div className='home-container'>
      <div className='background-image'></div>
      <div className='hook'>
        <div>{hook}</div>
      </div>
      <div className='search-container'>
          <form>
              <input 
                  type="text" 
                  className='home-form-control' 
                  placeholder='Find Vendors'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
              />
          </form>
          <div className='search-button' onClick={() => searchPressed()}>Search</div>
      </div>
      <h3 className='isLoadingQuery'>{isLoadingQuery}</h3>
      <table className='table'>
        <thead>
          <tr>
            {colNames.map((headerItem, index) => (
              <th key={index}>
                {headerItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((obj, index) => (
            <tr key={index}>
              {Object.values(obj).map((value, index2) => (
                index2 === 2 ? <a href={mapsParser(value)} target="_blank">{value}</a> : 
                <td key={index2}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>    
  )
}

export default Home