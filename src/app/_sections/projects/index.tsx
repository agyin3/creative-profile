import { ProjectsCard } from "./components/projects-card";
import styles from "./projects.module.css";
import { projectsData } from "./data";

export interface ProjectsProps {
    usesMobile: boolean;
}

export function Projects({ usesMobile }: ProjectsProps) {
    return (
        <div id="projects" className={`w-full py-10 px-5 ${styles.projectsBg}`}>
            <h2 className="text-4xl sm:text-5xl text-center">Projects</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-5">
                {projectsData.map((data) => (
                    <ProjectsCard
                        key={data.title}
                        {...data}
                        usesMobile={usesMobile}
                    />
                ))}
            </div>
        </div>
    );
}
