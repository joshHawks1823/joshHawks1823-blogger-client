import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import {Link} from 'react-router-dom';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => alert('Error fetching posts'));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='container p-5'>
      <Nav />
      <br />
      <h1 className='mt-5 text-center' style={{ color: '#214056', fontFamily: 'Pacifico, cursive', fontSize: '2.5rem' }}>Recent Blogs</h1>
      <hr style={{ width: '50%', margin: 'auto' }} />
      {
        posts.map((post, i) => (
          <div className="row mt-4" key={post._id} style={{borderBottom: '1px solid #778899'}}> 
            <div className="col pt-3 pb-2">
              <Link style={{textDecoration: 'none', color: '#214056', cursor: 'pointer'}} to={`/post/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className="lead">{post.content.substring(0, 100)}</p>
              <p>Author <span className="badge bg-secondary">{post.user}</span>  Published on{' '}<span className="badge bg-secondary">{new Date(post.createdAt).toLocaleString()}</span></p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default App;
