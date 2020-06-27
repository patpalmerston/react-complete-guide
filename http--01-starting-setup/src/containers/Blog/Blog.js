import React, { Component } from 'react';
// import axios from 'axios';
//Link allows us to navigate components without reloading the html page, "a" tags reload the whole page
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to='/'
                                    exact
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-submit=true',
                                    }}
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                <Route path='/:id' exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;
