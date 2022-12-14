import React from 'react'

const OrderCard = ({ order }) => {
  return (
    <div className='order-card'>
        <h3>Ordered from {order.vendorName} on {order.orderDate}:</h3>
        {order.items.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <h3>Total: ${order.total}</h3>
    </div>
  )
}

export default OrderCard