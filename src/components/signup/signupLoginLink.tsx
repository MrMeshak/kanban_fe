import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ISignupLoginLinkProps {}

export default function SignupLoginLink(props: ISignupLoginLinkProps) {
  return (
    <div className="flex justify-center">
      <p>
        Already have an account?{' '}
        <Link
          className="pl-1 font-semibold  decoration-2 hover:text-teal-600 hover:underline"
          to="/login"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}
