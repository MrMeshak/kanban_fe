import { HTMLAttributes, ReactNode } from 'react';
import cn from '../../../utils/cn';

export interface IFormFieldErrorProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export default function FormFieldError({
  children,
  className,
  ...props
}: IFormFieldErrorProps) {
  return (
    <p className={cn(['absolute text-sm text-rose-300', className])} {...props}>
      {children}
    </p>
  );
}
