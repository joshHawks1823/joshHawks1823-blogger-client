import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import renderHTML from 'react-render-html';

const SinglePost = (props) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => setPost(response.data))
      .catch((err) => alert('Error loading single post'));
  }, [props.match.params.slug]);

  const showSinglePost = () => (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 mt-4'>
          <h2>{post.title}</h2>
          <hr style={{ width: '30%', marginRight: 'auto' }} />
          <div className='mt-1' style={{ fontSize: '1.2rem' }}>
            {renderHTML(post && post.content)}
          </div>
          <p style={{ marginBottom: '0' }}>
            Author <span className='badge bg-secondary'>{post.user}</span>{' '}
            Published on{' '}
            <span className='badge bg-secondary'>
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className='container-fluid p-5'>
      <Nav />
      {post && showSinglePost()}
    </div>
  );
};

export default SinglePost;
