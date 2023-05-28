import React from 'react';
import PropTypes from 'prop-types';
import css from './List.module.css';
// import css from '../buttons/IconBtn/IconBtn.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/close.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { handleRemoveContact } from '../../redux/contacts/item';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  function removeContact(id) {
    dispatch(deleteContact(id));
  }
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.btn__icon}
              aria-label="Delete contact"
              onClick={() => removeContact(id)}
            >
              <DeleteIcon width="10" heigth="10" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
