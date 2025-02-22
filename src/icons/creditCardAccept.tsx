import React from "react";

const CreditCardAccept = ({stroke}: {stroke?: string}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99978 2.66699H6.99978C4.49407 2.66699 3.24121 2.66699 2.40475 3.32757C2.27097 3.43323 2.14724 3.54968 2.03498 3.67559C1.56786 4.19954 1.41163 4.89709 1.35938 6.00033H14.6402C14.5879 4.89709 14.4317 4.19954 13.9646 3.67559C13.8523 3.54968 13.7286 3.43323 13.5948 3.32757C12.7584 2.66699 11.5055 2.66699 8.99978 2.66699Z"
        fill="white"
      />
      <path
        d="M7.33337 13.3337H7.00004C4.49432 13.3337 3.24146 13.3337 2.40501 12.6731C2.27123 12.5674 2.1475 12.451 2.03524 12.3251C1.33337 11.5378 1.33337 10.3586 1.33337 8.00033C1.33337 5.642 1.33337 4.46284 2.03524 3.67559C2.1475 3.54968 2.27123 3.43323 2.40501 3.32757C3.24146 2.66699 4.49432 2.66699 7.00004 2.66699H9.00004C11.5058 2.66699 12.7586 2.66699 13.5951 3.32757C13.7289 3.43323 13.8526 3.54968 13.9648 3.67559C14.5972 4.38488 14.6598 5.41232 14.666 7.33366"
        stroke={stroke || "#014DAF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33337 6H14.6667"
        stroke={stroke || "#014DAF"}
        strokeLinejoin="round"
      />
      <path
        d="M9.33337 12.0007C9.33337 12.0007 10 12.0007 10.6667 13.334C10.6667 13.334 12.7844 10.0007 14.6667 9.33398"
        stroke={stroke || "#014DAF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CreditCardAccept;
