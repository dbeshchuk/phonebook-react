import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ id, name, number, onDeleteClick }) => (
  <li>
    {name}: {number}
    <button onClick={onDeleteClick} id={id}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
};

export default ContactItem;
