import React, { Component } from 'react';
import Axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts: []
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState(
                { posts:response.data }
                )
            console.log("success ", {response})
        })
        .catch(response =>{
            console.log("Fail")
        })
    }
    render () {
      const  posts = this.state.posts.map(post =>{
            return <Post title={post.title} auther="Ashwini" key={post.id} id={post.id}/>
        })
        return (
            <div>
                <h3 style={{textAlign:"center", fontSize: "30px"}}>Post</h3>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;