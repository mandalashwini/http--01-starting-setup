import React, { Component } from 'react';
import Axios from 'axios'
import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import './Blog.css';
import { Route,NavLink , Switch} from 'react-router-dom'
import FullPost from '../Blog/FullPost/FullPost'
class Blog extends Component {
   
    render () {
      
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact
                                activeClassName = 'My-active'
                                activeStyle = { {
                                    color : "#fa923f",
                                    textDecoration : "underline"
                                }}>Home</NavLink></li>
                            <li><NavLink to={ {
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <Switch>
                        <Route path='/' exact component={Posts} />
                        <Route path='/new-post' exact component={NewPost} />
                        <Route path='/post/:id' exact component={FullPost} />
                    </Switch>
            </div>
        );
    }
}

export default Blog;