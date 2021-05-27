import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <Fragment>
      {filtered
        ? filtered.map((i) => <ContactItem key={i.id} contact={i} />)
        : contacts.map((i) => <ContactItem key={i.id} contact={i} />)}
    </Fragment>
  );
};

export default Contacts;
