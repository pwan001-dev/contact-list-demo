import React, {Component} from 'react';
import PropTypes from "prop-types";
import ContactsService from "../services/ContactsService";

export default class EditContactView extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onExit: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.contact.firstname,
            lastname: this.props.contact.lastname
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({firstname: event.target.value});
    };

    handleLastNameChange = (event) => {
        this.setState({lastname: event.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.firstname || !this.state.lastname) {
            console.log('Incomplete edit form');
            return;
        }
        ContactsService.editContact({
            ...this.props.contact,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        });
        this.props.onExit();
    };

    render() {
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                background: 'rgba(0,0,0,0.6)'
            }}>
                <div
                    style={{
                        display: 'flex',
                        height: '70vh',
                        width: '70vw',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'lightgray'
                    }}
                >
                    <form onSubmit={this.handleSubmit}
                          style={{
                              display: 'flex',
                              flexDirection: 'column'
                          }}>
                        <h1>
                            {`Username: ${this.props.contact.username}`}
                        </h1>
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
            </div>
        );
    }

}