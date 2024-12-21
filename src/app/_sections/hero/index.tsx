import styles from "./hero.module.css";

export const Hero = () => {
    return (
        <div
            id="home"
            className={`h-full flex items-center justify-center ${styles.heroBg}`}
        >
            <h1 className="text-7xl font-bold text-center sm:text-9xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-secondary to-accent1 block leading-normal">
                    Create
                </span>
                <span className="block leading-normal text-accent1">
                    Don`&apos;`t
                </span>
                <span className="text-transparent block leading-normal text-outline">
                    Conform
                </span>
            </h1>
        </div>
    );
};
