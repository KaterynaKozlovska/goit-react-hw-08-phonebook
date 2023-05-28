import css from './Form.module.css';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useAddContactMutation, useFetchContactsQuery } from '../../api';
import { saveContact } from 'redux/contacts/operations';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const contactFormSchema = yup.object().shape({
//   name: yup
//     .string()
//     .trim()
//     .max(64)
//     .required('Name is required')
//     .matches(nameRegex, {
//       message:
//         "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
//     }),

//   number: yup
//     .string()
//     .trim()
//     .required('Number is required')
//     .min(5)
//     .matches(numberRegex, {
//       message:
//         'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
//     }),
// });

// export const loginFormSchema = yup.object().shape({
//   email: yup.string().trim().required('Email is required').matches(emailRegex, {
//     message: 'Invalid email.',
//   }),
//   password: yup.string().trim().required('Password is required').min(6),
// });

// export const registrationFormSchema = yup.object().shape({
//   name: yup.string().trim().required('Name is required'),
//   email: yup.string().trim().required('Email is required').matches(emailRegex, {
//     message: 'Invalid email.',
//   }),
//   password: yup.string().trim().required('Password is required').min(8),
// });

export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    resolver: yupResolver(contactFormSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const addNewContact = async data => {
    const normalizedName = data.name.toLowerCase();

    if (contacts.find(item => item.name.toLowerCase() === normalizedName)) {
      return toast.info(`${data.name} is already in contacts!`);
    }
    try {
      await addContact(data);
      toast.info('New contact has been added in your phone book');
    } catch (error) {
      toast.error('Something has happened, new contact was not added');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(addNewContact)}>
      <div className={css.field}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          placeholder="Enter a contact name"
          autoComplete="off"
          {...register('name')}
        />
        {errors.name && <div>{errors.name?.message}</div>}
      </div>
      <div className={css.field}>
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          type="tel"
          placeholder="Enter a contact number"
          autoComplete="off"
          {...register('number')}
        />
        {errors.number && <div>{errors.number?.message}</div>}
      </div>
      <button className={css.btn__submit} type="submit">
        Add contact
      </button>
    </form>
  );
};
