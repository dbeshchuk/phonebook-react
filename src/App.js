import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

import { Container } from "@mui/material";

const App = () => (
  <Container className="container">
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </Container>
);

export default App;
