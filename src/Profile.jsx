import React from 'react'
import axios from 'axios';
import './index.css';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
function Profile() {
    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);
    // const [flag, setFlag] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/profile')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error fetching profile:', error));
        axios.get('http://localhost:8000/followers')
            .then(response => setFollowers(response.data))
            .catch(error => console.error('Error fetching followers:', error));
        // setFlag(prev => !prev);
    }, [followers]);
    const x = (e) => { console.log(e) };
    function handleOnChange(e){
        setProfile({...profile, [e.target.name]: e.target.value});
    }
    const handleOnSubmit = async() => {
        axios.put('http://localhost:8000/profile', profile)
            .then(response => console.log('Profile updated:', response.data))
            .catch(error => console.error('Error updating profile:', error));
        // setFlag(true);
    }
    const handleUnfollow = async(id) => {
        axios.delete(`http://localhost:8000/followers/${id}`)
            .then(response => {
                console.log('Unfollowed:', response.data);            })
            .catch(error => console.error('Error unfollowing user:', error));
    }
    return (
        <div className='d-flex'>
            <Link to="/" className="text-decoration-none text-dark my-4 ms-3">
                <i className="bi bi-house-door" style={{width:"20px",height:"20px",textAlign:"center",fontSize:"20px"}}></i>
            </Link>
            <div className='mt-5 ms-2 my-0' style={{width:"100%",height:"100%"}}>
                <h2>Profile</h2>
                {profile && (
                    <div>
                        <img src={profile.profilePic} alt="Profile" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
                        <p>Username: {profile.username}</p>
                        <input type="text" value={profile.profilePic} placeholder="Profile Picture URL" name="profilePic" className="form-control" style={{ marginBottom: '10px', width: '50%' }} onChange={handleOnChange}/>
                        <input type="text" value={profile.username} placeholder="Username" name="username" className="form-control" style={{ marginBottom: '10px', width: '50%' }} onChange={handleOnChange}/>
                        <button className="btn btn-primary" onClick={handleOnSubmit}>Update Profile</button>
                        <input className="ph form-control bg-dark text-white border-danger w-50 my-2" placeholder="Testing..." onChange={x} />
                        {followers.length > 0 ? (
                            <div>
                                <h3>Followers</h3>
                                <ul className="list-unstyled w-100">
                                    {followers.map(follower => (
                                        <li key={follower.id}  className='d-flex align-items-center my-3' style={{width:'50%'}}>
                                            <img src={follower.profilePic} alt={follower.username} className="rounded-circle mx-2" style={{ width: '30px', height: '30px' }} />
                                            <div>{follower.username}</div>
                                            <button className="btn btn-outline-primary btn-sm ms-auto" onClick={() => handleUnfollow(follower.id)}>Unfollow</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No followers yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile