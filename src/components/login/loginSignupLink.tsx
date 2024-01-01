import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ILoginSignupLinkProps {}

export default function LoginSignupLink(props: ILoginSignupLinkProps) {
  return (
    <div className="flex justify-center">
      <p className="">
        Don't have an account?{' '}
        <Link
          className="pl-1 font-semibold  decoration-2 hover:text-sky-600 hover:underline"
          to="/signup"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
