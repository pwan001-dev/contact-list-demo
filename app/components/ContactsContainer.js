import React, {Component} from 'react';
import ContactsStore from '../stores/ContactsStore';
import ContactItemView from './ContactItemView';
import ContactsService from "../services/ContactsService";
import ContactsListContainer from "./ContactsListContainer";

export default class ContactsContainer extends Component {
    render() {
        return (
            <div>
                {this.__renderList()}
            </div>
        );
    }

    __renderList() {
        return (
            <ContactsListContainer/>
        );
    }
}