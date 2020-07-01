import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    };

    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            // if we dont have the loaded post or if we do have it or it has a different id than the one we are loading
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                    // fixing the infinite loop, the id return is a string and we need it to be a number. By check changing !== into != (this just checks for the value not the type) or we can use !== + which turn the id into a number
                    this.state.loadedPost.id != this.props.match.params.id)
            ) {
                axios
                    .get('posts/' + this.props.match.params.id)
                    .then((response) => {
                        // console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios
            .delete('posts/' + this.props.match.params.id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className='FullPost'>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className='Edit'>
                        <button
                            className='Delete'
                            onClick={this.deletePostHandler}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
