import React from 'react';
import faker from 'faker';

const CommentBox = (props) => {
    console.log(props);

    const { name, time, comment } = props;

    return (
        <div className="commentBox">
            <div className="flexbox">
                <img alt="내일 뭐먹지" src={faker.image.avatar()} />
                <div className="flexbox column">
                    <div>
                        {name}
                    </div>
                    <div>
                        {time}
                    </div>
                </div>
            </div>
            <div>
                {comment}
            </div>
        </div>
    )
}

export default CommentBox;