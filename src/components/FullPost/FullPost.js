import React, { Component } from 'react';
import Axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
   
    state = {
        loadedPost : null
    }
    componentDidUpdate () {
        if(this.props.post_id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.post_id) )
            {
                    Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.post_id)
                    .then(response =>{
                    //const  post_data = response
                        console.log("data-->",response)
                        this.setState({loadedPost :response.data})
                    })
            }
                
                
        }
    }
    
       // console.log("Welcome", this.state.before_cnt)

    
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.post_id){
          post = <p style={{textAlign: 'center'}}>Loading...........</p>;
        };
        console.log("------->",this.props.post_id)
        if (this.state.loadedPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.content}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
    }
        return post;
    }
}

export default FullPost;