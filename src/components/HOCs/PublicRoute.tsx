import { FC, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import { useAuth } from 'redux/auth/authSelectors';

const PublicRoute: FC = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Navigate to="/profile" />
  ) : (
    <Suspense fallback={<Skeleton />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
