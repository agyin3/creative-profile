import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const Burger = React.forwardRef<SVGSVGElement, IconProps>(
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
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
);

Burger.displayName = "Burger";
export default Burger;
