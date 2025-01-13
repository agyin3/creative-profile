import Image from "next/image";
import Link from "next/link";
import { ProjectsData } from "../data";
import { ProjectsProps } from "..";

interface ProjectsCardProps extends ProjectsProps, ProjectsData {}

export function ProjectsCard({
    imgSrc,
    title,
    info,
    url,
    imgAltText,
    usesMobile,
    mobileImgSrc,
}: ProjectsCardProps) {
    return (
        <div className="w-full flex bg-accent2 rounded-lg sm:flex-col sm:w-auto">
            <Image
                src={usesMobile ? mobileImgSrc : imgSrc}
                alt={imgAltText}
                width={usesMobile ? 150 : 400}
                height={usesMobile ? 150 : 400}
                className="rounded-lg"
            />
            <div className="flex flex-col justify-center items-start px-2 sm:py-2 gap-2 sm:w-full">
                <p className="font-shrikhand text-base bold text-primary sm:self-center sm:text-2xl">
                    {title}
                </p>
                <p className="text-sm text-white sm:text-base">{info}</p>
                <Link href={url} className="underline text-sm sm:text-lg">
                    View projects
                </Link>
            </div>
        </div>
    );
}
