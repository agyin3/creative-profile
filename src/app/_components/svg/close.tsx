import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const Close = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, color, ...props }, ref) => (
        <svg
            ref={ref}
            {...props}
            className={className}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
);

Close.displayName = "Close";
export default Close;
