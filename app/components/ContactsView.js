import React, {Component} from 'react';
import ContactsService from "../services/ContactsService";
import ContactsListContainer from "./ContactsListContainer";
import AddContactForm from "./AddContactForm";
let cnt = 0
export default class ContactsView extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('mounted: ', cnt++)
    }

    render() {
        return (
            <div>
                {this.__renderAddForm()}
                {this.__renderList()}
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
            <ContactsListContainer/>
        );
    }
}