import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactsService from "../services/ContactsService";

export default class ContactItemView extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
    };

    edit = e => {
        this.props.onEdit(this.props.contact)
    };

    remove = e => {
        ContactsService.deleteContact(this.props.contact);
    };

    render() {
        return (
            <tr>
                <td>{this.props.contact.id}</td>
                <td>{this.props.contact.username}</td>
                <td>{this.props.contact.firstname}</td>
                <td>{this.props.contact.lastname}</td>
                <td onClick={this.edit} style={{width: '75px'}}>{'EDIT'}</td>
                <td onClick={this.remove} style={{width: '75px'}}>{'REMOVE'}</td>
            </tr>
        );
    }
}