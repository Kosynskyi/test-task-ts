import { useAppSelector } from 'hooks/hooks';

export function useAuth() {
  const { user, token, isLoggedIn, isLoading, isFetchingCurrentUser } =
    useAppSelector(state => state.auth);

  return {
    user,
    token,
    isLoggedIn,
    isLoading,
    isFetchingCurrentUser,
  };
}
