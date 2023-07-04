import React, { useEffect } from 'react'
import axios from 'axios'

function postBlog() {
  const data = {
    title,
    body
  }

    useEffect ((url) => {
        axios.post(url, data).then((response) => {
            console.log(response);
        })
    })
}

export default postBlog