import { ReactNode, useEffect } from 'react';
import { useUser } from '../features/authentication/hooks/useUser';
import Spinner from './Spinner';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};
function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default ProtectedRoute;
