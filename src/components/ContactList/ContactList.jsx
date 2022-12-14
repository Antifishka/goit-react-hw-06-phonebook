import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { getContacts, getFilter } from "redux/selectors";
import { Contacts, ContactItem } from "./ContactList.styled";
import { getVisibleContacts } from "helpers/getVisibleContacts";

export const ContactList = () =>{
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter);

    return (
        <Contacts>
            {visibleContacts.map(({ id, name, number }) =>
                <ContactItem key={id}>
                    <Contact id={id} name={name} number={number}/>
                </ContactItem>
            )}
        </Contacts>
    );
}; 


