import * as React from "react"

type LogoIconProps = React.HTMLAttributes<HTMLOrSVGElement>

const LogoIcon = (props: LogoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 85.68 76.83"
    {...props}
  >
    <path
      d="M57.49 26.93 63.83 4H40.88l-6.34 22.93H11.6L5.26 49.88H28.2l-6.35 22.95H44.8l6.34-22.95h22.94l6.35-22.95H57.49z"
      data-name="Layer 1"
      style={{
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 8,
      }}
    />
  </svg>
)

export default LogoIcon
