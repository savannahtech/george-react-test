import { Template, IconProps } from './Template';

export function Add({ className, ...props }: IconProps) {
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
      <path d="M20 13.333V26.6663M13.3334 19.9997H26.6667M36.6667 19.9997C36.6667 29.2044 29.2048 36.6663 20 36.6663C10.7953 36.6663 3.33337 29.2044 3.33337 19.9997C3.33337 10.7949 10.7953 3.33301 20 3.33301C29.2048 3.33301 36.6667 10.7949 36.6667 19.9997Z" stroke="#DEE5F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Template>
  );
}

export default Add;
