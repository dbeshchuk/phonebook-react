import React, { useEffect, useState } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem("contacts")) {
      return [...JSON.parse(localStorage.getItem("contacts"))];
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const newContact = [{ id: shortid.generate(), name: name, number: number }];

    contacts.some((item) => item.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([...contacts, ...newContact]);
  };

  const filteredContacts = () => {
    if (filter) {
      return contacts.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return contacts;
  };

  const onDeleteClick = (targetId) => {
    setContacts(contacts.filter((item) => item.id !== targetId));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm submit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter
        value={filter}
        change={(e) => {
          setFilter(e.target.value);
        }}
      />

      <ContactsList
        list={filteredContacts()}
        onDeleteClick={(e) => {
          onDeleteClick(e.target.id);
        }}
      />
    </div>
  );
}

export default App;
