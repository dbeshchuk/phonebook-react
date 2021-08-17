import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

const App = () => (
  <div className="container">
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </div>
);

export default App;
