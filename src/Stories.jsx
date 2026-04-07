import React from 'react'
import './index.css'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom'
function Stories() {
  const {data, loading, error} = useFetch('http://localhost:8000/stories');
  const navigate=useNavigate();
  if(loading && !error){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      
      <div className="Stories">
        <div className="d-flex">
          {data.length > 0 ? data.map((story) => 
            <div key={story.id}>
              <div className="stories" onClick={()=>{navigate('/story/'+story.id+'/'+data.length)}}>
                <img src={story.user.profilePic} alt={story.user.username} className="rounded-circle w-100 h-100" />
                <div className="text-truncate" style={{width:"50px"}}>{story.user.username}</div>
              </div>
            </div>
          ) : <div>No stories available</div>}
        </div>
      </div>
    </>
  )
}

export default Stories