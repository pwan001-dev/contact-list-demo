import React, {Component} from 'react';
import {Container} from 'flux/utils';
import ContactsStore from '../stores/ContactsStore';
import ContactItemView from './ContactItemView';
import ContactsService from "../services/ContactsService";

class ContactsListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: ContactsStore.getState().contacts
        }
    }

    static getStores() {
        return [ContactsStore];
    }

    static calculateState() {
        return {
            contacts: ContactsStore.getState().contacts
        };
    }

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {this.__renderList()}
            </div>
        );
    }

    __renderList() {
        let items = [];
        this.state.contacts.forEach((contact, index) => {
            items.push(this.__renderItem(contact, index));
        });
        return (
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>FIRST</th>
                    <th>LAST</th>
                    <th>EDIT</th>
                    <th>REMOVE</th>
                </tr>
                {items}
                </tbody>
            </table>
        );
    }

    __renderItem(contact, index) {
        return (
            <ContactItemView
                key={'contact' + index}
                contact={contact}
            />
        )
    }
}

export default Container.create(ContactsListContainer);