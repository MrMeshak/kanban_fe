import * as React from 'react';
import { InputText } from '../base/form/inputText';
import { Button } from '../base/button/button';

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
  return (
    <div className="py-4">
      <div className="pb-2">
        <label
          htmlFor="email"
          className="block pb-1 font-semibold text-gray-300"
        >
          Email
        </label>
        <InputText />
      </div>
      <div className="pb-2">
        <label
          htmlFor="password"
          className="block pb-1 font-semibold text-gray-300"
        >
          Password
        </label>
        <InputText type="password" />
      </div>
      <Button className="my-3 w-full">Login</Button>
    </div>
  );
}
