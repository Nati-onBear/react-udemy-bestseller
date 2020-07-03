import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="App-header">
                    <nav>
                        <ul>
                            <li><img src={logo} className="App-logo" alt="logo" /></li>
                            <li><NavLink 
                                exact 
                                to='/' 
                                activeClassName='the-active'
                                activeStyle={{
                                    color:'#61dafb',
                                    textDecoration:'underline'
                                }}
                            >Home</NavLink></li>
                            <li><NavLink 
                                to={{
                                    pathname: '/new',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                activeStyle={{
                                    color:'#61dafb',
                                    textDecoration:'underline'
                                }}
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Route exact path='/' component={Posts} />
                <Route path='/new' component={NewPost}/>
            </div>
        );
    }
}

export default Blog;