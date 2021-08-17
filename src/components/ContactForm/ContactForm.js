import React, { useState } from "react";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.contacts);

  function formSubmit(e) {
    e.preventDefault();

    const newContact = [{ id: shortid.generate(), name: name, number: number }];

    items.some((item) => item.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch({
          type: "SET_ITEMS",
          payload: [...items, ...newContact],
        });

    setName("");
    setNumber("");
  }

  return (
    <form onSubmit={formSubmit}>
      <input
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <input
        className="number-input"
        placeholder="Number"
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button type="submit">Add to contacts</button>
    </form>
  );
};

export default ContactForm;
