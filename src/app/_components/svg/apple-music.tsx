import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    height?: string;
    width?: string;
}

const AppleMusic = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, height, width, ...props }, ref) => (
        <svg
            ref={ref}
            {...props}
            className={className}
            width={width ?? "40"}
            height={height ?? "40"}
            viewBox="0,0,256,256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                style={{ mixBlendMode: "normal" }}
            >
                <g transform="scale(5.12,5.12)">
                    <path d="M37,4h-24c-4.962,0 -9,4.037 -9,9v24c0,4.963 4.038,9 9,9h24c4.962,0 9,-4.037 9,-9v-24c0,-4.963 -4.038,-9 -9,-9zM35,27v4v0.021h-0.002c-0.012,2.747 -2.249,4.979 -4.998,4.979h-0.5c-0.987,0 -1.933,-0.42 -2.596,-1.152c-0.662,-0.731 -0.985,-1.718 -0.887,-2.705c0.178,-1.763 1.77,-3.143 3.626,-3.143h1.357c1.103,0 2,-0.897 2,-2v-9.795l-12,2.25v10.545v4c0,2.757 -2.243,5 -5,5h-0.5c-0.987,0 -1.933,-0.42 -2.596,-1.152c-0.662,-0.731 -0.985,-1.718 -0.887,-2.705c0.178,-1.763 1.77,-3.143 3.626,-3.143h1.357c1.103,0 2,-0.897 2,-2v-14.647c0,-0.963 0.687,-1.79 1.633,-1.966l12.591,-2.36c0.439,-0.083 0.891,0.033 1.234,0.319c0.345,0.286 0.542,0.707 0.542,1.154z"></path>
                </g>
            </g>
        </svg>
    )
);

AppleMusic.displayName = "AppleMusic";
export default AppleMusic;