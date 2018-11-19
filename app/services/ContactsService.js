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
            let index = contacts.find((existingContact) => {
                return contact.username === existingContact.username
            });
            if (index === undefined) {
                contact.id = count++; //TODO DB handle uid
                contacts.push(contact); //TODO service request
                SampleActionCreators.contactAdded({
                    contact
                })
            } else {
                console.log('Duplicate Contact username blocked: ', contact);
            }
        });
    }

    static editContact(contact) {
        setTimeout(() => {
            let index = contacts.findIndex((existingContact) => {
                return contact.id === existingContact.id
            });
            if (index >= 0) {
                contacts[index] = contact;
                SampleActionCreators.contactEdited({
                    contact
                })
            } else {
                console.log('Edit failed for: ', contact)
            }
        });
    }

    static deleteContact(contact) {
        setTimeout(() => {
            let index = contacts.findIndex((existingContact) => {
                return contact.id === existingContact.id
            });
            if (index >= 0) {
                let deletedContact = contacts[index];
                contacts.splice(index, 1);
                SampleActionCreators.contactDeleted({
                    contact: deletedContact
                })
            } else {
                console.log('Delete failed for: ', contact)
            }
        });
    }
}