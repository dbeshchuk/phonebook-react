import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";

const ContactsList = ({ list, onDeleteClick }) => (
  <ul>
    {list.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteClick={onDeleteClick}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  list: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func,
};

export default ContactsList;
