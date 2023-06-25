import { NavList, NavItemLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <NavItemLink to={'/'}>Home</NavItemLink>
        {isLoggedIn && <NavItemLink to={'/contacts'}>Contacts</NavItemLink>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavList>
    </nav>
  );
};
