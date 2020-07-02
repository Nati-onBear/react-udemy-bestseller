import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(8, 12)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: post.userId === 1?'Barry Bear':'Quoc Hung'
                    }    
                })
                this.setState({ posts: updatedPosts })
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
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;