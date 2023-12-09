import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '../../../utils/cn';

interface IInputTextProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputTextVariants> {}

export const InputText = forwardRef(
  (
    { className, _variant, ...props }: IInputTextProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        type="text"
        className={cn(inputTextVariants({ _variant, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);

const inputTextVariants = cva('', {
  variants: {
    _variant: {
      primary:
        'placeholder-gray-200 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none',
      error:
        'placholder-grey-200 border-2 border-rose-200 rounded-md focus:border-rose-300 focus:outline-none ',
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
