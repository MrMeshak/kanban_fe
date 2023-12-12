import SignupForm from '../components/signup/signupForm';
import SignupHeader from '../components/signup/signupHeader';
import SignupLoginLink from '../components/signup/signupLoginLink';

export interface ISignupPageProps {}

export default function SignupPage(props: ISignupPageProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center p-8">
      <div className="w-full max-w-md rounded-lg border-2 border-gray-200 bg-white p-8 ">
        <SignupHeader />
        <SignupForm />
        <SignupLoginLink />
      </div>
    </div>
  );
}
