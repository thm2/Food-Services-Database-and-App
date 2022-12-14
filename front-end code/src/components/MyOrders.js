import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OrderCard from './OrderCard'
import { Link } from 'react-router-dom'

const MyOrders = ({ userID }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    

    useEffect(() => {
    getData()
    },[])

    const dateParser = input => {
        let year = input.substring(0, 4)
        let month = input.substring(5, 7)
        let day = input.substring(8, 10)
        return `${month}/${day}/${year}`
    }

    const getData = async() => {
    setIsLoading(true)
    const response = await axios.get(`https://dbmsproject07.herokuapp.com/orders/getuserOrders?id=${userID}`)
    if (response.data === "No order made") {
        setData([])
    } else {
        let orders = []
        let groups = []
        let group = []
        for (let i = 0; i < response.data.length; i++) {
            if (i === response.data.length - 1) {
                group.push(response.data[i])
                groups.push(group)
            } else if (response.data[i].total !== response.data[i + 1].total) {
                group.push(response.data[i])
                groups.push(group)
                group = []
            } else {
                group.push(response.data[i])
            }
        }
        for (let i = 0; i < groups.length; i++) {
            let order = {vendorName: groups[i][0].vendorName,
                         orderDate: dateParser(groups[i][0].orderDate),
                         total: groups[i][0].total,
                         items: []}
            for (let j = 0; j < groups[i].length; j++) {
                order.items.push(groups[i][j].item)
            }
            orders.push(order)
        }
        setData(orders)
    }
    setIsLoading(false)
    }

  if (isLoading) {
    return (
        <>
            <div className='background-image1'/>
            <h1 className='loader'>Loading...</h1>
        </>
    )
  } else if (data.length === 0) {
    return (
        <div className='myOrders-container'>
            <div className='background-image1'/>
            <div className='hook1'>
                <div>My Orders</div>
            </div>
            <h2 className='aq-labels'>No history yet...</h2>
            <Link to="/">
                <div className='no-order-history-btn'>How about we change that?</div>
            </Link>
        </div>
    )
  } else {
    return (
        <div className='myOrders-container'>
            <div className='background-image1'/>
            <div className='hook'>
                <div>My Orders</div>
            </div>
            <div className='orderCard-container'>
                {data.map((order, index) => (
                    <OrderCard order={order}/>
                ))}
            </div>
        </div>
      )
  }
}

export default MyOrders