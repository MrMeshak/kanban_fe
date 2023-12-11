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
        'placeholder-gray-200 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none',
      error:
        'placholder-grey-200 border-2 border-rose-200 rounded-md focus:border-rose-200 focus:outline-none ',
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
