import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const SinglePost = (props) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => setPost(response.data))
      .catch((err) => alert('Error loading single post'));
  }, [props.match.params.slug]);
  return (
    <div className='container-fluid p-5'>
      <Nav />
      <br />
      <div className='container mt-5'>
        <br />
        <h2>{post.title}</h2>
        <hr style={{ width: '30%', marginRight: 'auto' }} />
        <p className='lead mt-1'>{post.content}</p>
        <p>
          Author <span className='badge bg-secondary'>{post.user}</span>{' '}
          Published on{' '}
          <span className='badge bg-secondary'>
            {new Date(post.createdAt).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}
  


export default SinglePost;
