import React from 'react';
import './Sign.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: ''
        }
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    onChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    onSubmit = () => {
        const { email, password, firstName } = this.state;

        let payload = {
            email: email,
            password: password,
            first_name: firstName
        };

        const url = 'http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signup';
        let options = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(payload)
        }

        fetch(url, options).then(res => res.json())
            .then((result) => {
                console.log("result", result);
                alert(result.success ? '성공' : `${result.message}`);
            },(error) => {
                console.log("error", error)
            });
    }

    render() {
        const { email, password, firstName } = this.state;

        return (
            <div>
                <div>
                    <label>Email</label>
                    <input 
                        value={email}
                        onChange={this.onChangeEmail}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        value={password}
                        onChange={this.onChangePassword}
                    />
                </div>

                <div>
                    <label>First Name</label>
                    <input 
                        value={firstName}
                        onChange={this.onChangeFirstName}
                    />
                </div>

                <button
                    onClick={this.onSubmit}
                >Submit</button>
            </div>
        );
    }

}

export default SignUp;