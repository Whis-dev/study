import React from 'react';

import Like from './like';
import CommentBox from './commentBox';

const FeedBox = (props) => {
    const { name, time, comment, like } = props.feed;

    return (
        <div>
            <CommentBox 
                name = {name}
                time = {time}
                comment = {comment}
            />
            <Like 
                like = {like}
            />
        </div>
    )
}

export default FeedBox;