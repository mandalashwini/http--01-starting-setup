import React, {Component} from 'react'
import Axios from '../../../axios'
class Post extends Component{
    state={
        posts: [],
        selected_post_id :null
    }
    componentDidMount(){
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
        this.setState({selected_post_id : id })

    }

   render(){
    const  posts = this.state.posts.map(post =>{
        return <Post title={post.title} auther={post.author} key={post.id} id={post.id} clicked = {()=>this.post_select_handler(post.id)}/>
    })
    return(

            //<h3 style={{textAlign:"center", fontSize: "30px"}}>Post</h3>
            <section className="Posts">
                {posts}
            </section>
         )
   }


}

export default Post