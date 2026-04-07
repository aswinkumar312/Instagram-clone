import React from 'react'
import { useEffect, useState } from 'react'
import useFetch from './useFetch';
import axios from 'axios';
function Suggestions() {

  // const [profile,setProfile]= useState(null);
  // const [suggestions,setSuggestions] = useState([]);

  const {data:profile, loading:profileLoading, error:profileError} = useFetch('http://localhost:8000/profile');
  const {data:suggestions, loading:suggestionsLoading, error:suggestionsError} = useFetch('http://localhost:8000/suggestions');

  // useEffect(()=>{
  //   fetch('http://localhost:8000/profile')
  //   .then(res=>res.json())
  //   .then(data=>setProfile(data))
  //   .catch(err=>console.log(err))

  //   fetch('http://localhost:8000/suggestions')
  //   .then(res=>res.json())
  //   .then(data=>setSuggestions(data))
  //   .catch(err=>console.log(err))
  // },[]);

  console.log("Profile:", profile);
  console.log("Suggestions:", suggestions);

  if(profileError || suggestionsError){
    return <p>Error loading data...</p>
  }
  if(profileLoading || suggestionsLoading){
    return <p>Loading...</p>
  }
  const handleFollow = async(id, username, profilePic) => {
    axios.post(`http://localhost:8000/followers`, { "id": id, "username": username, "profilePic": profilePic })
    .then(response => console.log('Followed:', response.data))
    .catch(error => console.error('Error following user:', error));
  }
  return (
    <div>
      <div className='suggestions w-75 m-4'>
        {profile && (
          <div key={profile.id} className="d-flex">
            <img className="dp rounded-circle"src={profile.profilePic} alt="Profile picture"/>
            <h6 className='username'>{profile.username}</h6>
            <p className='ms-auto mt-1 text-primary'>Switch</p>
          </div>
          )
        }
        
        <div className='d-flex'>
          <p>Suggestions for you</p>
          <b className='ms-auto'>See all</b>
        </div>

        {suggestions && suggestions.length > 0 ?
          (suggestions.map(suggestion=>(
              <div key={suggestion.id} className="d-flex my-3">
                <img className="dp rounded-circle"src={suggestion.profilePic} alt="Profile picture"/>
                <h6 className='username'>{suggestion.username}</h6>
                <button className='ms-auto mt-1 text-primary bg-white border-0' onClick={() => handleFollow(suggestion.id, suggestion.username, suggestion.profilePic)}>Follow</button>
              </div>
            ))):(
              <p>Loading...</p>
            )
        }
        
      </div>
    </div>
  )
}

export default Suggestions;