import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userID, getUserID }) => {
    if (userID === "") {
        return (
            <>
                <div className="header">
                    <div className="title">
                        <Link to="/">
                            <h1>Food Finder</h1>
                        </Link> 
                    </div>
                    <div>
                        <ul className="list">
                            <li>
                                <Link to="/">
                                    <div>Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <div>Sign in</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
          )
    } else {
        return (
            <>
                <div className="header">
                    <div className="title">
                        <Link to="/">
                            <h1>Food Finder</h1>
                        </Link> 
                    </div>
                    <div>
                        <ul className="list">
                            <li>
                                <Link to="/">
                                    <div>Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/myOrders">
                                    <div>My orders</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin">
                                    <div>Admin</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div onClick={()=>getUserID("")}>Sign out</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
          )
    }
}

export default Header