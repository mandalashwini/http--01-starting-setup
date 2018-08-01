import React, {Component} from 'react'
import Axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import {Link} from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
class Posts extends Component{
    state={
        posts: [],
        selected_post_id :null
    }
    componentDidMount(){
        console.log("History",this.props)
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts_data = response.data.slice(0,4)
            const updated_data = posts_data.map(post => {
                return {...post,
                        author : "Ashwini"
                        }
                })
            this.setState(
                { posts:updated_data }
                )
            console.log("success ", {response})
        })
        .catch(response =>{
            console.log("Fail")
        })
    }

    post_select_handler = (id) => {
        ///alert(id)
       // this.setState({selected_post_id : id })
       
       this.props.history.push('/' + id)

    }

   render(){
    const  posts = this.state.posts.map(post =>{
                    return(
                        //<Link to={'/post/' + post.id } key={post.id}>
                     <Post title={post.title} 
                           auther={post.author} 
                           id={post.id} 
                           key={post.id}
                           clicked = {()=>this.post_select_handler(post.id)}/>
                    // </Link>
                    )
                  })
    return(

            //<h3 style={{textAlign:"center", fontSize: "30px"}}>Post</h3>
            <div>
            <section className="Posts">
                {posts}
            </section>
               <Route path='/:id' exact component={FullPost} />
            </div>
         )
   }


}

export default Posts