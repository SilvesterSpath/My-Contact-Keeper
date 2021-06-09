import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {filtered
          ? filtered.map((i) => (
              <CSSTransition key={i._id} timeout={300} classNames='item'>
                <ContactItem contact={i} />
              </CSSTransition>
            ))
          : contacts.map((i) => (
              <CSSTransition key={i._id} timeout={300} classNames='item'>
                <ContactItem contact={i} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
