import React from "react";
import {render} from "react-dom";

import ContactsContainer from "./components/ContactsView";
import ContactsService from "./services/ContactsService";

ContactsService.getContactList();
console.log('init')
render(
    <ContactsContainer/>,
    document.getElementById("root")
);