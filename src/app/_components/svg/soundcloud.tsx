import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    height?: string;
    width?: string;
}

export const Soundcloud = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, color, height, width, ...props }, ref) => (
        <svg
            ref={ref}
            {...props}
            className={className}
            width={width ?? "40"}
            height={height ?? "40"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#fff"
        >
            <path
                d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.4776 10.6001C17.485 10.6 17.4925 10.6 17.5 10.6C19.9853 10.6 22 12.4804 22 14.8C22 17.1196 19.9853 19 17.5 19H14M17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333C17.5 7.29827 15.0376 5 12 5H11V19M17.4776 10.6001C17.3753 11.6589 16.9286 12.625 16.2428 13.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
);

Soundcloud.displayName = "Soundcloud";
export default Soundcloud;
