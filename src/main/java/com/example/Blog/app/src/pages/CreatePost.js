import React, { useState } from 'react'

function CreatePost() {

  const data = useFetch()

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Create Post</h1>
        <div className='inputGroup'>
          <label>Title:</label>
          <input placeholder='Title...' 
          onChange={(event)=> setTitle(event.target.value)}/>
        </div>
        <div className='inputGroup'>
          <label>Post</label>
          <textarea placeholder='input text...'
          onChange={(event)=> setBody(event.target.value)}/>
        </div>
        <button>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost;















