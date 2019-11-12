import React from 'react';

const Like = (props) => {
    const { like } = props;

    return (
        <div className="ui labeled button" tabIndex="0">
            <div className="ui red button">
                <i className="heart icon"></i> Like
            </div>
            <a  href="#" className="ui basic red left pointing label">
                { like }
            </a>
        </div>
    )
}

export default Like;