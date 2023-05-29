import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { UserWrapper, Paragraph, UserName, BtnLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isPageWide = useMediaQuery('(min-width: 768px)');

  return (
    <UserWrapper>
      <Paragraph>
        Welcome, <UserName>{user.name}</UserName>
      </Paragraph>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        {' '}
        Back
        {isPageWide}
      </BtnLogOut>
    </UserWrapper>
  );
};
