import { Template, IconProps } from './Template';

export function Task({ className, ...props }: IconProps) {
  return (
    <Template
      fill="none"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.3333 16.6667L19.9999 23.3333L26.6666 16.6667M6.66659 5H33.3333C34.2173 5 35.0652 5.35119 35.6903 5.97631C36.3154 6.60143 36.6666 7.44928 36.6666 8.33333V18.3333C36.6666 22.7536 34.9106 26.9928 31.785 30.1184C28.6594 33.2441 24.4202 35 19.9999 35C17.8112 35 15.644 34.5689 13.6219 33.7313C11.5998 32.8937 9.76245 31.6661 8.21481 30.1184C5.0892 26.9928 3.33325 22.7536 3.33325 18.3333V8.33333C3.33325 7.44928 3.68444 6.60143 4.30956 5.97631C4.93468 5.35119 5.78253 5 6.66659 5Z"
        stroke="#DEE5F0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Template>
  );
}

export default Task;
