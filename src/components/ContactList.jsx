import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))
      }
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
}

export default ContactList;