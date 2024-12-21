import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    height?: string;
    width?: string;
}

const Spotify = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, height, width, ...props }, ref) => (
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
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M7.5 12.0685C8.59944 11.6998 9.77639 11.5 11 11.5C13.0238 11.5 14.9199 12.0465 16.5488 13M18 10C16.1509 8.7383 13.9122 8 11.5 8C9.90307 8 8.38216 8.32358 7 8.90839M15.129 16C13.8927 15.3609 12.4894 15 11.0018 15C10.1819 15 9.38762 15.1096 8.63281 15.315"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
);

Spotify.displayName = "Spotify";
export default Spotify;