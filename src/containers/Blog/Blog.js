import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import logo from '../../assets/logo.svg';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(96, 105)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: post.userId === 1?'Barry Bear':'Quoc Hung'
                    }    
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                this.setState({ error: error.toString() })
            })
    }

    onPostClick = (id) => {
        this.setState({ selectedPostId: id })
    }

    render () {
        const posts = this.state.posts.map(post => 
            <Post key={post.id} data={post} onClick={() => this.onPostClick(post.id)}/>    
        )

        return (
            <div>
                <header className="App-header">
                    <nav>
                        <ul>
                            <li><img src={logo} className="App-logo" alt="logo" /></li>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    {this.state.error === null && <FullPost id={this.state.selectedPostId} />}
                </section>
                <section className="Posts">
                    {this.state.error ? <h1>{this.state.error}</h1> : posts}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;