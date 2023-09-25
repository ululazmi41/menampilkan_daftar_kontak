import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ConcactInput';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    }

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactInput addContact={this.onAddContactHandler} />
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;