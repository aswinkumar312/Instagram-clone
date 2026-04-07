import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='d-flex flex-column align-items-center'>
            {(posts.length>0)?
            posts.map(post=>
                <div className='my-3' key={post.id}>
                    <div key={post.id} className="d-flex">
                        <img className="dp rounded-circle"src={post.user.profilePic} alt="Profile picture"/>
                        <h6 className='username'>{post.user.username}</h6>
                    </div>
                    <img className="post-image" src={post.image} alt="Post image"/>
                    <div>
                        <b><i className="bi bi-heart"></i></b>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <b>{post.likes} likes</b>
                    <p>{post.caption}</p>
                </div>
            ):<h3>Loading posts</h3>}
        </div>
    )
}

export default Posts