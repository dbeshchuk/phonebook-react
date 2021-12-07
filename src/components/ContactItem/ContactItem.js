import React from "react";
import PropTypes from "prop-types";

import { ListItem, IconButton, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";

const styles = {
  item: {
    width: 200,
  },
};

const ContactItem = ({ id, name, number, onDeleteClick }) => (
  // <li>
  //   {name}: {number}
  //   <button onClick={onDeleteClick} id={id}>
  //     Delete
  //   </button>
  // </li>

  <ListItem style={styles.item}>
    <ListItemText primary={name} secondary={number} />

    <IconButton onClick={onDeleteClick} id={id} color="error" size="small">
      <Delete />
    </IconButton>
  </ListItem>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
};

export default ContactItem;
