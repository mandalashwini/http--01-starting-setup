import React, { Component } from 'react';
import Axios from 'axios'
import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import './Blog.css';
import { Route,Link } from 'react-router-dom'
class Blog extends Component {
   
    render () {
      
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={ {
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
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