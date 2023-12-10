import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputText } from '../base/form/inputText';
import { Button } from '../base/button/button';
import { httpClient } from '../../axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Axios, AxiosError } from 'axios';

const loginFormSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(1, 'Required'),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormSchema) => {
      return await httpClient.post('/auth/login', data);
    },
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
      if (error instanceof AxiosError) {
        setError('root', { message: error.response?.data.message });
        return;
      }

      setError('root', { message: 'Oops, something went wrong.' });
      return;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormSchema) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative pb-5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="email"
            className="block pb-1 font-semibold text-gray-300 "
          >
            Email
          </label>
        </div>
        <InputText
          _variant={errors.email ? 'error' : 'primary'}
          {...register('email')}
        />{' '}
        {errors.email && (
          <p className="absolute  bottom-0 text-sm text-rose-300">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className=" relative pb-5">
        <label
          htmlFor="password"
          className="block pb-1 font-semibold text-gray-300"
        >
          Password
        </label>
        <InputText
          type="password"
          _variant={errors.password ? 'error' : 'primary'}
          {...register('password')}
        />
        {errors.password && (
          <p className="absolute bottom-0 text-sm text-rose-300">
            {errors.password.message}
          </p>
        )}
      </div>
      {errors.root && (
        <p className="rounded-md bg-rose-100 px-4 py-2  text-rose-700">
          {errors.root.message}
        </p>
      )}

      <Button type="submit" className="my-3 w-full">
        Login
      </Button>
    </form>
  );
}
