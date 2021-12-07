import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";
// import { getContacts, deleteContact } from "../../services/contactsAPI";
import { getFilteredContacts } from "../../app/selectors";

import { List } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const onDeleteContact = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
    // deleteContact(id);
  };

  return (
    <List style={styles.container}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteClick={(e) => onDeleteContact(e.currentTarget.id)}
        />
      ))}
    </List>
  );
};

export default ContactsList;
