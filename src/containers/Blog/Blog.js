import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="App-header">
                    <nav>
                        <ul>
                            <li><img src={logo} className="App-logo" alt="logo" /></li>
                            <li>
                                <NavLink 
                                    exact 
                                    to='/' 
                                    activeClassName='the-active'
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{
                                        pathname: '/new',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}
                                    activeClassName='the-active'
                                >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route exact path='/posts' component={Posts} />
                <Switch>
                    <Route path='/new' component={NewPost}/>
                    <Route exact path='/posts/:postId' component={FullPost} />
                    <Redirect from='/' to='/posts'/>
                </Switch>
                
            </div>
        );
    }
}

export default Blog;