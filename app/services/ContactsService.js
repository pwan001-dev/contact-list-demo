import SampleActionCreators from "../actions/ContactsActionCreators";

//TODO placeholder until back-end is setup
let count = 1;
const contacts = [
    {
        id: 0,
        username: 'patent.zero',
        firstname: 'patient',
        lastname: 'zero',
    }
];

export default class ContactsService {
    static getContactList() {
        console.log('getContactList')
        setTimeout(() => {
            SampleActionCreators.contactListLoaded({
                contacts: [
                    ...contacts
                ]
            });
        });
    }

    static addContact(contact) {
        setTimeout(() => {
            contacts.push(contact); //TODO service request
            SampleActionCreators.contactAdded({
                result: 'success',
                contact: {
                    id: count++, //TODO DB handle key
                    ...contact
                }
            })
        });
    }
}