import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FeedBox from './feedBox';

const feeds = [
    {
        name: 'A',
        time: '8:00',
        comment: '안녕하세요',
        like: 0
    },
    {
        name: 'B',
        time: '9:00',
        comment: '안녕하세요',
        like: 0
    },
    {
        name: 'C',
        time: '10:00',
        comment: '안녕하세요',
        like: 0
    },
    {
        name: 'D',
        time: '11:00',
        comment: '안녕하세요',
        like: 0
    },
    {
        name: 'E',
        time: '12:00',
        comment: '안녕하세요',
        like: 0
    },
    {
        name: 'F',
        time: '13:00',
        comment: '안녕하세요',
        like: 0
    },
];


const App = () => {

    return (
        <div>
            <div className="ui container">
                {
                    feeds.map((feed) => {
                        return <FeedBox feed={feed}/>
                    })
                }
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
