import React, { Component } from 'react';
// import axios from 'axios';
//Link allows us to navigate components without reloading the html page, "a" tags reload the whole page
// The order of links is important
// Switch allows us to only load one link at a times
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/AsyncComponent';
import './Blog.css';
// import NewPost from '../Blog/NewPost/NewPost';

const AsyncNewComponent = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    // create state to replicate auth
    state = {
        auth: true,
    };

    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to='/posts/'
                                    exact
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Posts
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
                <Switch>
                    {/* check if auth state is true with turnary - this is considered a guard as the redirect will send us to posts as soon as the conditional is false and is null*/}
                    {this.state.auth ? (
                        <Route path='/new-post' component={AsyncNewComponent} />
                    ) : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
