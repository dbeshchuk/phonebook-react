import React, { useEffect } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, deleteContact } from "../../services/contactsAPI";
import { getFilteredContacts } from "../../app/selectors";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    getContacts()
      .then((value) => dispatch({ type: "SET_ITEMS", payload: value }))
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeleteContact = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
    deleteContact(id);
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteClick={(e) => onDeleteContact(e.target.id)}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
