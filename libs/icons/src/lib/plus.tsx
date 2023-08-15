import { Template, IconProps } from './Template';

export function Plus({ className, ...props }: IconProps) {
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
      <path d="M12 5V19M5 12H19" stroke="#1D2939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Template>
  );
}

export default Plus;
