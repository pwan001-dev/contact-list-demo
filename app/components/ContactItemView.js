import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ContactsService from "../services/ContactsService";

export default class ContactItemView extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
    };

    handleClick = e => {
        ContactsService.addContact({
            username: 'addedDude',
            firstname: 'Added',
            lastname: 'Dude',
        });
    };

    render() {
        return (
            <tr onClick={this.handleClick}>
                <td>{this.props.contact.id}</td>
                <td>{this.props.contact.username}</td>
                <td>{this.props.contact.firstname}</td>
                <td>{this.props.contact.lastname}</td>
                <td>{'EDIT'}</td>
            </tr>
        );
    }
}