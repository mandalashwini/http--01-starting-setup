import React, { Component } from 'react';
import Axios from 'axios';
import './FullPost.css';
import Spinner from '../../../components/Spinner/Spinner'
class FullPost extends Component {
   
    state = {
        loadedPost : null,
        loader_time : null
    }

    componentDidMount () {
        console.log("jhfds",this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                Axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }
    deletePostHandler = () => {
        Axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
        .then(response =>{
        //const  post_data = response
            console.log("data-->",response)
          //  alert("goen")
            //confirm("done!!")
            
        }).catch(response =>{
            console.log("fail")
        })
    }
    
       // console.log("Welcome", this.state.before_cnt)

    
    render () {
        let post = null
    
        if (this.props.match.params.id){
            console.log("Loading------->",this.props.match.params.id)
        };
        post = <Spinner />

        if (this.state.loadedPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.content}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );
        
    }
   
        return (
            <div>
               {post}
            </div>
        );
    }
}

export default FullPost;