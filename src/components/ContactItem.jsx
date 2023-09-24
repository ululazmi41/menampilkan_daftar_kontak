import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

ContactItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
}

export default ContactItem;