import { headers } from "next/headers";
import { Header } from "./_components/header";
import { Hero } from "./_sections/hero";
import { Music } from "./_sections/music";
import { isMobile } from "./_utils/isMobile";
import { Projects } from "./_sections/projects";
import { homeNavLinks } from "./_components/header/data";

export default async function Home() {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent");
    const usesMobile = isMobile(userAgent || "");
    return (
        <div className="min-h-screen">
            <Header navLinks={homeNavLinks} />
            <main className="h-dvh w-dvw">
                <Hero />
                <Music usesMobile={usesMobile} />
                <Projects usesMobile={usesMobile} />
            </main>
        </div>
    );
}
