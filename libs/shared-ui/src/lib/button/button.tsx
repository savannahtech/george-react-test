import { ButtonHTMLAttributes, forwardRef } from 'react';
// import { SpinnerIcon } from '@tasks-management/icons';
import { helpers } from '@tasks-management/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  contentClassName?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      className,
      isSubmitting = false,
      contentClassName,
      ...props
    },
    ref
  ) => {
    /**
     * variables
     */
    disabled = (() => {
      if (isSubmitting) {
        return true;
      }
      return disabled;
    })();

    return (
      <button
        ref={ref}
        className={helpers.classNames(
          'outline-0',
          'text-sm font-semibold whitespace-nowrap select-none',
          'rounded-md hover:bg-opacity-80',
          'gap-2 flex items-center',
          'disabled:pointer-events-none',
          'active:shadow-[inset_0_0_100px_100px_rgba(0,0,0,0.1)]',
          className
        )}
        {...{ disabled, ...props }}
      >
        {isSubmitting ?
          <svg
            className="h-3 w-3 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle opacity={0.25} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path opacity={0.75} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        :
          ''
        }
        <div
          className={helpers.classNames(
            contentClassName,
            'flex items-center justify-center gap-2'
          )}
        >
          {children}
        </div>
      </button>
    );
  }
);

export default Button;
