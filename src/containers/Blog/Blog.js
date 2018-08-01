import React, { Component } from 'react';
import Axios from 'axios'
//import Post from '../../components/Post/Post';

import './Blog.css';

class Blog extends Component {
   
    render () {
      
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                            </ul>
                        </nav>
                    </header>
               
               
            </div>
        );
    }
}

export default Blog;