import { Button } from '../components/base/button/button';
import LoginForm from '../components/login/loginForm';
import LoginHeader from '../components/login/loginHeader';
import LoginSignupLink from '../components/login/loginSignupLink';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <div className="rounded-lg border-2 border-gray-200 bg-white p-8 ">
        <LoginHeader />
        <LoginForm />
        <LoginSignupLink />
      </div>
    </div>
  );
}
