import { useAppSelector } from 'hooks/hooks';

export function useAuth() {
  const { id, user, token, isLoggedIn } = useAppSelector(state => state.auth);

  return {
    id,
    user,
    token,
    isLoggedIn,
  };
}
