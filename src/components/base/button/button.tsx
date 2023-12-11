import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import cn from '../../../utils/cn';

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({
  children,
  className,
  _variant,
  _size,
  ...props
}: IButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ _variant, _size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva('', {
  variants: {
    _variant: {
      primary:
        'rounded-full bg-teal-700 font-semibold text-white hover:bg-teal-600',
      secondary:
        'rounded-full bg-teal-100 text-teal-700 font-semibold hover:bg-teal-200',
      danger:
        'rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-400',
    },
    _size: {
      sm: 'w-fit py-3 px-14 text-xs ',
      lg: 'w-fit px-16 py-4 text-sm ',
    },
  },
  defaultVariants: {
    _variant: 'primary',
    _size: 'lg',
  },
});
