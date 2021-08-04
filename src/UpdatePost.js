import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const UpdatePost = (props) => {
  const [state, setState] = useState({
    title: '',

    slug: '',
    user: '',
  });

  const { title, slug, user } = state;

  const [content, setContent] = useState('');

  // rich text editor handle change
  const handleContent = (event) => {
    setContent(event);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => {
        const { title, content, slug, user } = response.data;
        setState({ ...state, title, slug, user });
        setContent(content);
      })
      .catch((error) => alert('Error loading single post'));
    // eslint-disable-next-line
  }, [props.match.params.slug]);

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.table({title, content, user})
    axios
      .put(`${process.env.REACT_APP_API}/post/${slug}`, {
        title,
        content,
        user,
      })
      .then((response) => {
        // console.log(response)
        const { title, content, slug, user } = response.data;
        // empty state
        setState({ ...state, title, content, slug, user });
        // show success alert
        alert(`Post titled ${response.data.title} is updated!`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  const showUpdateForm = () => (
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
        <label className='form-label text-muted'>Write Something:</label>
        <ReactQuill
          onChange={handleContent}
          value={content}
          className='pb-5 mb-3'
          placeholder='Write Something...'
          theme='bubble'
          style={{ border: '1px solid #DDD', background: '#fff' }}
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
      <div className='d-grid'>
        <button
          className='btn text-white'
          style={{ width: '8rem' }}
          type='submit'
        >
          UPDATE
        </button>
      </div>
    </form>
  );
  return (
    <div className='container-fluid p-5'>
      <Nav />
      <br />
      <div className='container mt-5'>
        <br />
        <h2
          style={{
            color: '#214056',
            fontFamily: 'Pacifico, cursive',
            fontSize: '2.5rem',
          }}
        >
          Update Post
        </h2>
        <hr style={{ width: '14%', marginRight: 'auto' }} />
        {showUpdateForm()}
      </div>
    </div>
  );
};

export default UpdatePost;
