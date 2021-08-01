import { useState } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Form from './components/Form';
import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import Modal from './components/Modal';
import useLocalStorage from './hooks/useLocalStorage';
import styles from './App.module.css';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addContact = ({ name, number }) => {

    if (contacts.some(contact => contact.name === name)) {
      toggleModal(name);
      // alert(`${name} already in contacts. Rewrite number?`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts([contact, ...contacts])
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    );
  };

  const searchFilter = e => {
    setFilter(e.currentTarget.value)
  };

  const filteredContacts = () => {
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch));
  }

  return (
      <Container>
        {showModal && <Modal onClose={toggleModal}>
          <h1>Hello!</h1>
          <p>This name already in contacts. Rewrite number?</p>
          <button className={styles.modalButton} type="button" onClick={toggleModal}>Close</button>
        </Modal>}
        <Section title="Phonebook">
          <Form onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={searchFilter} />
          <PhoneBook contacts={filteredContacts()} onDeleteContact={deleteContact} />
        </Section>
      </Container>
    );
}

