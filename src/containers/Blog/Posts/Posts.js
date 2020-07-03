import React, { Component } from 'react'
import Axios from 'axios'
import './Posts.css'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'

export default class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: null
  }

  componentDidMount() {
    console.log(this.props)
    Axios.get('/posts')
      .then(res => {
        const posts = res.data.slice(90, 105)
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

  render() {
    const posts = this.state.posts.map(post => 
      <Post key={post.id} data={post} onClick={() => this.onPostClick(post.id)}/>    
    )
    return (
      <div>
        <section>
          {this.state.error === null && <FullPost id={this.state.selectedPostId} />}
        </section>
        <section className="Posts">
          {
            this.state.error 
              ? <h1>{this.state.error}</h1> : 
              (Array.isArray(this.state.posts) && this.state.posts.length) 
                ? posts 
                : <h1>Fetching Post Data</h1>
          }
        </section>
      </div>
    )
  }
}
