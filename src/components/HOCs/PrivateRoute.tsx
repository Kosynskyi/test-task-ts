import { FC, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import { useAuth } from 'redux/auth/authSelectors';

const PrivateRoute: FC = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Suspense fallback={<Skeleton />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
