import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>{props.id}</h1>
        <p style={{fontSize:"12px"}}>{props.title}</p>
        <div className="Info">
            <div className="Author">{props.auther}</div>
        </div>
    </article>
);

export default post;