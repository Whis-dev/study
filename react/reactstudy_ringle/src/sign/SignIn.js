import React from 'react';
import './Sign.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        // this.updateEmail = this.updateEmail.bind(this);
        // this.updatePassword = this.updatePassword.bind(this);
        // this.submit = this.submit.bind(this);
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    submit = () => {
        const { email, password } = this.state;

        /**
         * Task: signup
         * http://stagings/ringleplus.com/api/v3/common/authenticate/simple_signup
         * post
         * email, password, first_name
         */

        let jsonPayload = {
            email: email,
            password: password
        }

        fetch('http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonPayload)
        }).then(res => res.json())
        .then((result) => {
            console.log("result", result);
            alert(result.success ? '성공' : `${result.message}`);
        },(error) => {
            console.log("error", error);
        });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <div className="inputTagWrapper">
                    <label>Email</label>
                    <input 
                        value={email}
                        onChange={this.updateEmail}
                    />
                </div>
                <div className="inputTagWrapper">
                    <label>Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={this.updatePassword}
                    />
                </div>
                <button
                    onClick={this.submit}
                >Submit</button>
            </div>
        );
    }
}

export default SignIn;