import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormInputText } from '../base/form/formInputText';
import { Button } from '../base/button/button';
import { httpClient } from '../../axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Axios, AxiosError, AxiosResponse } from 'axios';
import FormLabel from '../base/form/formLabel';
import FormFieldError from '../base/form/formFieldError';
import FormRootError from '../base/form/formRootError';

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
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInputText
          _variant={errors.email ? 'error' : 'primary'}
          {...register('email')}
        />{' '}
        {errors.email && (
          <FormFieldError>{errors.email.message}</FormFieldError>
        )}
      </div>
      <div className=" relative pb-5">
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInputText
          type="password"
          _variant={errors.password ? 'error' : 'primary'}
          {...register('password')}
        />
        {errors.password && (
          <FormFieldError>{errors.password.message}</FormFieldError>
        )}
      </div>
      {errors.root && (
        <FormRootError className="my-2">{errors.root.message}</FormRootError>
      )}
      <Button type="submit" className="my-3 w-full">
        Login
      </Button>
    </form>
  );
}
