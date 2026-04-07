import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import './index.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function ViewStory() {
  const { id,tot } = useParams();
  const {data, loading, error} = useFetch(`http://localhost:8000/stories/${id}`);
  const navigate=useNavigate();
  // const numId=Number(id);
  // useEffect(()=>{
  //   if(numId<=0 || numId>3){
  //     navigate('/');
  //   }
  // },[numId,navigate,id])
  useEffect(()=>{
    if(Number(id)<1 || Number(id)>tot){
      navigate('/');
    }
  },[navigate,id])
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Some error occurred</div>
  }
  return (
    // numId>0 && numId<=3 ? (
    <div key={data.id} className="d-flex justify-content-center align-items-center vh-100">
        <Link to={`/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
        {data.image && <img src={data.image} alt={`Story ${data.id}`} className="story"/>}
        <Link to={`/story/${Number(id)+1}/${tot}`} className='p-2'><i className="bi bi-arrow-right-circle-fill"></i></Link>
    </div>
    // ) : (<div>Story not found</div>)
  )
}

export default ViewStory