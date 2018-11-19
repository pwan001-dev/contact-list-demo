import React, {Component} from 'react';
import ContactsService from "../services/ContactsService";
import ContactsListContainer from "./ContactsListContainer";
import AddContactForm from "./AddContactForm";
import EditContactView from "./EditContactView";

export default class ContactsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editContact: null
        }
    }

    openEdit = (editContact) => {
        this.setState({editContact: editContact})
    };

    closeEdit = () => {
        this.setState({editContact: null})
    };

    render() {
        return (
            <div>
                {this.__renderAddForm()}
                {this.__renderList()}
                {this.__renderEditDialog()}
            </div>
        );
    }

    __renderAddForm() {
        return (
            <AddContactForm/>
        );
    }

    __renderList() {
        return (
            <ContactsListContainer
                onEdit={this.openEdit}
            />
        );
    }

    __renderEditDialog() {
        if (this.state.editContact) {
            return (
                <EditContactView
                    contact={this.state.editContact}
                    onExit={this.closeEdit}
                />
            );
        }
    }
}