import { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react';
import cn from '../../../utils/cn';

export interface IFormRootErrorProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export default function FormRootError({
  children,
  className,
  ...props
}: IFormRootErrorProps) {
  return (
    <p
      className={cn([
        'rounded-md bg-rose-100 px-4 py-2  text-rose-700',
        className,
      ])}
      {...props}
    >
      {children}
    </p>
  );
}
