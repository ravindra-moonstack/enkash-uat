import React from "react"

const CheckmarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // ✅ spread props so you can customize
    >
      <mask
        id="mask0_3858_69384"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="25"
      >
        <path
          d="M11.4406 1.77197L14.23 3.80681L17.6832 3.80044L18.7436 7.08635L21.541 9.11057L20.4678 12.3922L21.541 15.6739L18.7436 17.6981L17.6832 20.984L14.23 20.9776L11.4406 23.0125L8.65117 20.9776L5.19799 20.984L4.13756 17.6981L1.34018 15.6739L2.41336 12.3922L1.34018 9.11057L4.13756 7.08635L5.19799 3.80044L8.65117 3.80681L11.4406 1.77197Z"
          fill="white"
          stroke="white"
          strokeWidth="2.12405"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.72275 12.3921L10.3778 15.0472L15.6879 9.73706"
          stroke="black"
          strokeWidth="2.12405"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_3858_69384)">
        <path
          d="M-1.30881 -0.354492H24.1798V25.1341H-1.30881V-0.354492Z"
          fill="#1C5AF4"
        />
      </g>
    </svg>
  )
}

export default CheckmarkIcon
