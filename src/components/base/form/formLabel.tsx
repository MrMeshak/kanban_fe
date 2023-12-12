import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes, ReactNode } from 'react';
import cn from '../../../utils/cn';

export interface IFormLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof formLabelVariants> {
  children: ReactNode;
}

export default function FormLabel({
  _variant,
  className,
  children,
}: IFormLabelProps) {
  return (
    <label className={cn(formLabelVariants({ _variant, className }))}>
      {children}
    </label>
  );
}

const formLabelVariants = cva('', {
  variants: {
    _variant: {
      primary: 'block pb-1 font-semibold text-gray-300 ',
    },
  },
  defaultVariants: {
    _variant: 'primary',
  },
});
