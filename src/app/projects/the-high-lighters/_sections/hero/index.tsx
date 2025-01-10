import styles from "./hero.module.css";

export function TheHighLightersHero() {
    return (
        <div
            className={`w-full h-96 bg-black text-white flex justify-center items-center ${styles.highlightersHero}`}
        ></div>
    );
}
