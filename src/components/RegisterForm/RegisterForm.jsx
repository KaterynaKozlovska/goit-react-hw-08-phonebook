import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';
import { registerSchema } from 'schemas/registerSchema';
import {
  FormContainer,
  Title,
  InputWrapper,
  Label,
  Input,
  Btn,
  ErrorMsg,
  PassWrapper,
  ShowPassBtn,
} from './RegisterForm.styled';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hadleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name && email && password) {
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
      navigate('/');
    } else {
      alert('All fields must be filled');
    }
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <Title>Sign up to continue</Title>
          <InputWrapper>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              id="username"
              onChange={hadleChange}
              value={name}
              autoComplete="off"
              pattern="([A-Za-z]+[\-\s]?){7,25}"
              title="Enter your first and last name"
            />
            <ErrorMsg name="username" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={hadleChange}
              value={email}
              autoComplete="off"
              title="Example of valid email address: qwerty1@example.com"
            />
            <ErrorMsg name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password:</Label>
            <PassWrapper>
              <Input
                type={passwordShown ? 'text' : 'password'}
                name="password"
                id="password"
                onChange={hadleChange}
                value={password}
                autoComplete="off"
                pattern="[0-9a-zA-Z!@#$%^&*]{6,}"
                title="Password should contains at least 7 symbols"
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Sign up</Btn>
        </FormContainer>
      )}
    </Formik>
  );
};
