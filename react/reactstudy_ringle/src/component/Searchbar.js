import React from 'react';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.receiveValue = this.receiveValue.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
    }

    receiveValue(event) {
        let value = event.target.value;
        console.log(value);

        this.setState({
            name: value
        });
    }

    onInputClick(event) {
        console.log(event);
        console.log("Input was clicked");
    }

    render() {
        const { name } = this.state;

        return (
            <div>
                <label>Name </label>
                <input 
                    type="text" 
                    onClick={this.onInputClick}
                    onChange={this.receiveValue}    
                />
                <p>{name}</p>
            </div>
        )
    }
}

export default Searchbar;