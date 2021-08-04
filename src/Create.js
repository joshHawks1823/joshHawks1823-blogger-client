import React, { useState } from 'react';
import BlogImg from '../src/assets/blog.jpg';
import axios from 'axios';
import Nav from './Nav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const Create = () => {
  const [state, setState] = useState({
    // State
    title: '',
    user: '',
  });

  const [content, setContent] = useState('');

  // rich text editor handle change
  const handleContent = (event) => {
    setContent(event);
  };

  // destructure values from state
  const { title, user } = state;

  // onchange event handler
  const handleChange = (name) => (event) => {
    console.log('name', name, 'event', event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.table({title, content, user})
    axios
      .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
      .then((response) => {
        console.log(response);
        // empty state
        setState({ ...state, title: '', user: '' });
        setContent('');
        // show success alert
        alert(`Post titled ${response.data.title} is created!`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className='container-fluid p-5'>
      <Nav />
      <br />
      <div className='container mt-5'>
        <div className='text-center'>
          <h2
            className='text-center'
            style={{
              color: '#214056',
              fontFamily: 'Pacifico, cursive',
              fontSize: '2.5rem',
            }}
          >
            Create Post
          </h2>
          <hr style={{ width: '50%', margin: 'auto' }} />
        </div>
        <div className='row g-0 mt-5' style={{ background: '#fff' }}>
          <div className='shadow col-md-7'>
            <div className='p-5'>
              <form onSubmit={handleSubmit}>
                <div className='col mb-3'>
                  <label className='form-label text-muted'>Title:</label>
                  <input
                    onChange={handleChange('title')}
                    value={title}
                    type='text'
                    className='form-control'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label text-muted'>Content: </label>
                  <ReactQuill
                    onChange={handleContent}
                    value={content}
                    className='pb-5 mb-3'
                    placeholder='Write Something...'
                    theme='bubble'
                    style={{ border: '1px solid #DDD' }}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label text-muted'>User:</label>
                  <input
                    onChange={handleChange('user')}
                    value={user}
                    type='text'
                    className='form-control'
                    required
                  />
                </div>
                <div className='d-grid mt-4'>
                  <button
                    className='btn text-uppercase text-white'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-5'>
            <img
              src={BlogImg}
              alt='blog'
              className='img-fluid shadow'
              style={{ minHeight: '440px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
