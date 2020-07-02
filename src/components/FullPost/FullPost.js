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
        (this.state.post === null ||(this.state.post && this.state.post.id !== this.props.id))
        &&
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(res => {
                console.log(res.data)
                this.setState({ post: res.data })    
            })
    }

    render () {
        let post = <h3>Please select a Post!</h3>
        this.props.id !== null && (post = (
            <div className="FullPost">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
        ))
        return post
    }
}

export default FullPost;