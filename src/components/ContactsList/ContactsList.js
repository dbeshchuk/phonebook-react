import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";

const ContactsList = () => {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.contacts);

  const filteredContacts = () => {
    if (filter) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return items;
  };

  return (
    <ul>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteClick={(e) =>
            dispatch({ type: "DELETE_ITEM", payload: e.target.id })
          }
        />
      ))}
    </ul>
  );
};

export default ContactsList;
