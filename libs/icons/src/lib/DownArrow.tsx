import { Template, IconProps } from './Template';

export function DownArrow({ className, ...props }: IconProps) {
  return (
    <Template
      fill="none"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 6L8 10L12 6" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Template>
  );
}

export default DownArrow;
