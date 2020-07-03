import React, { Component } from 'react';
import './NewPost.css';
import Axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Bear'
    }

    componentDidMount() {
        console.log(this.props)
    }

    postDataHandler = () => {
        const postData = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        Axios.post('/posts/', postData)
            .then(res => {
                console.log(res)
            })
    }

    render () {
        const { title, content, author } = this.state
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Bear">Barry Bear</option>
                    <option value="Hung">Quoc Hung</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;