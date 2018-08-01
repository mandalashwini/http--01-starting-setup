import React, { Component } from 'react';
import Axios from 'axios'
import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import './Blog.css';
import { Route } from 'react-router'
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
                   <Route path='/' exact component={Posts} />
                   <Route path='/new-post' exact component={NewPost} />
               
            </div>
        );
    }
}

export default Blog;