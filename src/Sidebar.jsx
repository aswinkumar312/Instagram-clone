import React from 'react'
import logo from './assets/Instagram-Logo-2016-present.png'
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div className="m-3">
        <div className="d-flex flex-column gap-3 position-fixed">
            <img className="logo-text" src={logo} />
            <div><i className="bi bi-house-door-fill"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-circle"></i>Reels</div>
            <div><i className="bi bi-envelope"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-circle"></i>Create</div>
            <Link className='text-decoration-none text-dark' to={'/profile'}><i className="bi bi-person-circle"></i>Profile</Link>
            
        </div>
        <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  ) 
}

export default Sidebar