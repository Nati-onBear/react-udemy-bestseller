import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';
import { NavLink } from 'react-router-dom';

class FullPost extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.match.params.postId !== null 
        && 
        (this.state.post === null || (this.state.post && this.state.post.id !== this.props.match.params.postId))
        &&
        axios.get('/posts/' + this.props.match.params.postId)
            .then(res => {
                this.setState({ post: res.data })    
            })
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.state.post.id)
            // .then(() => { 
            //     this.setState({ post: { id: null } }) 
            // })
            .then(() => {
                alert('Post ' + this.state.post.id + ' has been deleted!')
                this.props.history.push({ pathname: '/posts' })
            })
    }

    render () {
        let post = <h3>Loading!</h3>
        Object.keys(this.state.post).length > 1 && (post = (
            <div className="FullPost">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <div className="Edit">
                    <NavLink to='/'>Return to Newsfeed</NavLink>
                    <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>
        ))
        return post
    }
}

export default FullPost;