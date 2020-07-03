import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: {}
    }

    componentDidUpdate() {
        this.props.id !== null 
        && 
        (this.state.post === null || (this.state.post && this.state.post.id !== this.props.id))
        &&
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(res => {
                this.setState({ post: res.data })    
            })
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(() => { 
                this.setState({ post: { id: this.props.id } }) 
            })
    }

    render () {
        let post = <h3>Please select a Post!</h3>
        Object.keys(this.state.post).length > 1 && (post = (
            <div className="FullPost">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <div className="Edit">
                    <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>
        ))
        return post
    }
}

export default FullPost;