import { Template, IconProps } from './Template';

export function RightArrow({ className, ...props }: IconProps) {
  return (
    <Template
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 18L15 12L9 6" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Template>
  );
}

export default RightArrow;
