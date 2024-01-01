import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '../../../utils/cn';

interface IFormInputTextProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formInputTextVariants> {}

export const FormInputText = forwardRef(
  (
    { className, _variant, ...props }: IFormInputTextProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        type="text"
        className={cn(formInputTextVariants({ _variant, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);

const formInputTextVariants = cva('', {
  variants: {
    _variant: {
      primary:
        'placeholder-slate-300 border-2 border-slate-300 rounded-md focus:border-slate-300 focus:outline-none',
      error:
        'placeholder-slate-300 border-2 border-rose-300 rounded-md focus:border-rose-300 focus:outline-none ',
    },
    _size: {
      md: 'w-full px-4 py-3',
    },
  },
  defaultVariants: {
    _variant: 'primary',
    _size: 'md',
  },
});
