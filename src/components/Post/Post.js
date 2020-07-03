import React from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

const post = (props) => {
    console.log(props)
    const { title, author } = props.data
    return (
        <article className="Post" onClick={props.onClick}>
            <h1>{title}</h1>
            <div className="Info">
                <div className="Author">{author}</div>
            </div>
        </article>
    )
};

export default withRouter(post);