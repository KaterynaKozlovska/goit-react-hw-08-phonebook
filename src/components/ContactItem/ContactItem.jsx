// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';
import { Btn, Item, Name, Number, Wrapper } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  // const [shownConfirm, setShownConfirm] = useState(false);
  // const toggleConfirm = () => setShownConfirm(!shownConfirm);

  return (
    <Item key={id}>
      <Wrapper>
        <Name>{name}</Name>
        <Number href={'tel:' + number}>{number}</Number>
      </Wrapper>

      <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Btn>

      {/* {shownConfirm && (
        <ConfirmModal name={name} id={id} closeConfirm={toggleConfirm} />
      )} */}
    </Item>
  );
};
