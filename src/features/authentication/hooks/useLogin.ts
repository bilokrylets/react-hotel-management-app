import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Login } from '../../../types/login';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: Login) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
    },
    onError: () => {
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
