import React, {Component} from 'react';
import ContactsService from "../services/ContactsService";

export default class AddContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: ''
            // username: 'testuser',
            // firstname: 'first',
            // lastname: 'last'
        };
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    };

    handleFirstNameChange = (event) => {
        this.setState({firstname: event.target.value});
    };

    handleLastNameChange = (event) => {
        this.setState({lastname: event.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.username || !this.state.firstname || !this.state.lastname) {
            console.log('Incomplete add form');
            return;
        }
        ContactsService.addContact({
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        });
        this.setState({
            username: '',
            firstname: '',
            lastname: '',
        })
    };

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                marginBottom: '20px'
            }}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </label>
                    <label>
                        First:
                        <input type="text" value={this.state.firstname} onChange={this.handleFirstNameChange}/>
                    </label>
                    <label>
                        Last:
                        <input type="text" value={this.state.lastname} onChange={this.handleLastNameChange}/>
                    </label>
                    <input type="submit" value="Submit"
                           style={{
                               borderStyle: 'solid',
                               borderWidth: '1px',
                               borderRadius: '10px',
                               backgroundColor: 'white'
                           }}/>
                </form>
            </div>
        );
    }
}