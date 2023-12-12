import { FormInputText } from '../base/form/formInputText';
import { Button } from '../base/button/button';
import FormLabel from '../base/form/formLabel';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormFieldError from '../base/form/formFieldError';
import { useMutation } from '@tanstack/react-query';
import { redirect, useNavigate } from 'react-router-dom';
import { httpClient } from '../../axios';
import { AxiosError } from 'axios';
import FormRootError from '../base/form/formRootError';

const signupFormSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Required')
    .min(8, 'At least 8 characters')
    .refine(
      (password) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])/.test(password),
      (password) => {
        const strArr: string[] = ['Requires'];
        if (!/(?=.*\d)/.test(password)) {
          strArr.push(' • number');
        }
        if (!/(?=.*[a-z])/.test(password)) {
          strArr.push(' • lowercase');
        }
        if (!/(?=.*[A-Z])/.test(password)) {
          strArr.push(' • uppercase');
        }
        if (!/(?=.*[\W])/.test(password)) {
          strArr.push(' • symbol');
        }
        return { message: strArr.join('') };
      },
    ),
});

type SignupFormSchema = z.infer<typeof signupFormSchema>;

export interface ISignupFormProps {}

export default function SignupForm(props: ISignupFormProps) {
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: async (data: SignupFormSchema) => {
      return await httpClient.post('/auth/signup', data);
    },
    onSuccess: () => {
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        setError('root', { message: error.response?.data.message });
        return;
      }

      setError('root', { message: 'Oops, something went wrong' });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = (data: SignupFormSchema) => {
    signupMutation.mutate(data);
  };

  return (
    <form className="relative py-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="pb-5">
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <FormInputText
          _variant={errors.firstName ? 'error' : 'primary'}
          {...register('firstName')}
        />
        {errors.firstName && (
          <FormFieldError>{errors.firstName.message}</FormFieldError>
        )}
      </div>

      <div className="pb-5">
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <FormInputText
          _variant={errors.lastName ? 'error' : 'primary'}
          {...register('lastName')}
        />
        {errors.lastName && (
          <FormFieldError>{errors.lastName.message}</FormFieldError>
        )}
      </div>

      <div className="pb-5">
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInputText
          _variant={errors.email ? 'error' : 'primary'}
          {...register('email')}
        />
        {errors.email && (
          <FormFieldError>{errors.email.message}</FormFieldError>
        )}
      </div>

      <div className="pb-5">
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
      {signupMutation.isSuccess && (
        <p className="rounded-md bg-teal-100 px-4 py-2  text-teal-700">
          Success
        </p>
      )}
      <Button className="my-3 w-full">Sign Up</Button>
    </form>
  );
}
