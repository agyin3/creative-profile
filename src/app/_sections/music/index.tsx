import Image from "next/image";
import styles from "./music.module.css";
import Spotify from "@/app/_components/svg/spotify";
import Soundcloud from "@/app/_components/svg/soundcloud";
import AppleMusic from "@/app/_components/svg/apple-music";
import { musicData } from "./data";

interface MusicProps {
    usesMobile: boolean;
}

export const Music = async ({ usesMobile }: MusicProps) => {
    return (
        <div id="music" className={`w-full py-10 px-5 ${styles.musicBg}`}>
            <h2 className="text-4xl sm:text-5xl text-center">Music</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-5">
                {musicData.map((data) => (
                    <div key={data.title}>
                        <div className="rounded-lg mb-3 relative">
                            {data.preSaveHref ? (
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-lg flex flex-col justify-center items-center">
                                    <p className="sm:text-3xl">Dropping</p>
                                    <p className="sm:text-3xl">
                                        {data.presaveDate}
                                    </p>
                                </div>
                            ) : null}
                            <Image
                                src={data.imgSrc}
                                alt={data.title}
                                width={usesMobile ? 150 : 400}
                                height={usesMobile ? 150 : 400}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-center gap-3 px-3">
                            {data.preSaveHref ? (
                                <a
                                    className="text-white underline sm:text-2xl hover:text-secondary"
                                    href={data.preSaveHref}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Pre-save now
                                </a>
                            ) : null}
                            {data.spotifyHref ? (
                                <a
                                    href={data.spotifyHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.hover}
                                >
                                    <Spotify
                                        height={usesMobile ? "25" : undefined}
                                        width={usesMobile ? "25" : undefined}
                                    />
                                </a>
                            ) : null}
                            {data.soundcloudHref ? (
                                <a
                                    href={data.soundcloudHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.hover}
                                >
                                    <Soundcloud
                                        height={usesMobile ? "25" : undefined}
                                        width={usesMobile ? "25" : undefined}
                                    />
                                </a>
                            ) : null}

                            {data.appleMusicHref ? (
                                <a
                                    href={data.appleMusicHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.hover}
                                >
                                    <AppleMusic
                                        height={usesMobile ? "25" : undefined}
                                        width={usesMobile ? "25" : undefined}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
