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
}: ProjectsCardProps) {
    return (
        <div className="w-full flex bg-accent2 rounded-lg sm:flex-col sm:w-auto">
            <Image
                src={imgSrc}
                alt={imgAltText}
                width={usesMobile ? 150 : 250}
                height={usesMobile ? 150 : 250}
                className="rounded-lg"
            />
            <div className="flex flex-col justify-center items-start px-2 sm:py-2 gap-2 sm:w-[250px]">
                <p className="font-shrikhand text-base bold text-primary sm:self-center">
                    {title}
                </p>
                <p className="text-sm text-white">{info}</p>
                <Link href={url} className="underline">
                    View projects
                </Link>
            </div>
        </div>
    );
}
