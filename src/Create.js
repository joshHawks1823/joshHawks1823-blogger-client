import React, { useState } from 'react';
import BlogImg from '../src/assets/blog.jpg';

const Create = () => {
  const [state, setState] = useState({
    // State
    title: '',
    content: '',
    user: '',
  });
  // destructure values from state
  const { title, content, user } = state;

  // onchange event handler
  const handleChange = (name) => (event) => {
    console.log('name', name, 'event', event.target.value);
    setState({ ...state, [name]: event.target.value });
  };
  return (
    <div className='container-fluid p-5'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='text-center' style={{ color: '#214056' }}>
            Create Post
          </h2>
          <hr style={{ width: '50%', margin: 'auto' }} />
          {JSON.stringify(state)}
        </div>
        <div className='row g-0 mt-5' style={{ background: '#fff' }}>
          <div className='shadow col-md-7'>
            <div className='p-5'>
              <form>
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
                  <label className='form-label text-muted'>
                    Write Something:
                  </label>
                  <textarea
                    onChange={handleChange('content')}
                    value={content}
                    name=''
                    className='form-control'
                    rows='3'
                    required
                  ></textarea>
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
              </form>
              <div className='d-grid'>
                <button className='btn btn-info text-white' type='button'>
                  Send
                </button>
              </div>
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
