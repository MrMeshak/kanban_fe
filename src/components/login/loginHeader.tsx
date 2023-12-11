import * as React from 'react';
import Logo from '../base/icons/logo';

export interface ILoginHeaderProps {}

export default function LoginHeader(props: ILoginHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <Logo className="h-16 w-16" />
      <h2 className=" text-4xl">Kanban</h2>
      <h4 className="">Login to your account</h4>
    </div>
  );
}
