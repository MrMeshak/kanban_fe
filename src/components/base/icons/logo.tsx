export interface ILogoProps {
  fill?: string;
  className?: string;
}

export default function Logo({ fill = '#134e4a', className }: ILogoProps) {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill} fillRule="evenodd">
        <rect width="6" height="25" rx="2" />
        <rect opacity=".75" x="9" width="6" height="25" rx="2" />
        <rect opacity=".5" x="18" width="6" height="25" rx="2" />
      </g>
    </svg>
  );
}
